// server.js

// init project
const express = require("express");
const bodyParser = require("body-parser");
const assets = require("./assets");
const multer = require("multer");
const fs = require("fs");
const sql = require("sqlite3").verbose();
const request = require("request");
const FormData = require("form-data");

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + "/images");
  },
  // keep the file's original name
  // the default behavior is to make up a random string
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
let uploadMulter = multer({ storage: storage });

// and some new ones related to doing the login process
const passport = require("passport");
// There are other strategies, including Facebook and Spotify
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Some modules related to cookies, which indicate that the user
// is logged in
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// Setup passport, passing it information about what we want to do
passport.use(
  new GoogleStrategy(
    // object containing data to be sent to Google to kick off the login process
    // the process.env values come from the key.env file of your app
    // They won't be found unless you have put in a client ID and secret for
    // the project you set up at Google
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      // CHANGE THE FOLLOWING LINE TO USE THE NAME OF YOUR APP
      callbackURL: "https://hazel-boundless-yearbook.glitch.me/auth/accepted",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo", // where to go for info
      scope: ["profile", "email"] // the information we will ask for from Google
    },
    // function to call to once login is accomplished, to get info about user from Google;
    // it is defined down below.
    gotProfile
  )
);

const app = express();
// take HTTP message body and put it as a string into req.body
app.use(bodyParser.urlencoded({ extended: true }));

// puts cookies into req.cookies
app.use(cookieParser());

// pipeline stage that echos the url and shows the cookies, for debugging.
// app.use("/", printIncomingRequest);

// Now some stages that decrypt and use cookies

// express handles decryption of cooikes, storage of data about the session,
// and deletes cookies when they expire
app.use(
  expressSession({
    secret: "bananaBread", // a random string used for encryption of cookies
    maxAge: 6 * 60 * 60 * 1000, // Cookie time out - six hours in milliseconds
    // setting these to default values to prevent warning messages
    resave: true,
    saveUninitialized: false,
    // make a named session cookie; makes one called "connect.sid" as well
    name: "ecs162-session-cookie"
  })
);

// Initializes request object for further handling by passport
app.use(passport.initialize());

// If there is a valid cookie, will call passport.deserializeUser()
// which is defined below.  We can use this to get user data out of
// a user database table, if we make one.
// Does nothing if there is no cookie
app.use(passport.session());

// The usual pipeline stages

// Public files are still serverd as usual out of /public
app.get("/*", express.static("public"));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// Also serve static files out of /images
app.use("/images", express.static("images"));

// special case for base URL, goes to index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Glitch assests directory
app.use("/assets", assets);

// stage to serve files from /user, only works if user in logged in

// If user data is populated (by deserializeUser) and the
// session cookie is present, get files out
// of /user using a static server.
// Otherwise, user is redirected to public splash page (/index) by
// requireLogin (defined below)
app.get("/user/*", requireUser, requireLogin, express.static("."));

// Now the pipeline stages that handle the login process itself

// Handler for url that starts off login with Google.
// The app (in public/index.html) links to here (note not an AJAX request!)
// Kicks off login process by telling Browser to redirect to Google.
app.get("/auth/google", passport.authenticate("google"));
// The first time its called, passport.authenticate sends 302
// response (redirect) to the Browser
// with fancy redirect URL that Browser will send to Google,
// containing request for profile, and
// using this app's client ID string to identify the app trying to log in.
// The Browser passes this on to Google, which brings up the login screen.

// Google redirects here after user successfully logs in.
// This second call to "passport.authenticate" will issue Server's own HTTPS
// request to Google to access the user's profile information with the
// temporary key we got from Google.
// After that, it calls gotProfile, so we can, for instance, store the profile in
// a user database table.
// Then it will call passport.serializeUser, also defined below.
// Then it either sends a response to Google redirecting to the
// /setcookie endpoint, below
// or, if failure, it goes back to the public splash page.
// NOTE:  Apparently, this ends up at the failureRedirect if we
// do the revoke in gotProfile.  So, if you want to redirect somewhere
// else for a non-UCDavis ID, do it there.
app.get(
  "/auth/accepted",
  passport.authenticate("google", {
    successRedirect: "/setcookie",
    failureRedirect: "/?email=notUCD"
  })
);

// One more time! a cookie is set before redirecting
// to the protected homepage
// this route uses two middleware functions.
// requireUser is defined below; it makes sure req.user is defined
// the second one makes a public cookie called
// google-passport-example
app.get("/setcookie", requireUser, function(req, res) {
  // if(req.get('Referrer') && req.get('Referrer').indexOf("google.com")!=-1){
  // mark the birth of this cookie

  // set a public cookie; the session cookie was already set by Passport
  res.cookie("google-passport", new Date());
  res.redirect("/create.html");
  // res.redirect('/');
  //} else {
  //   res.redirect('/');
  //}
});

// currently not used
// using this route, we can clear the cookie and close the session
app.get("/user/logoff", function(req, res) {
  // clear both the public and the named session cookie
  res.clearCookie("google-passport");
  res.clearCookie("ecs162-session-cookie");
  res.redirect("/");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// Some functions called by the handlers in the pipeline above

// Function for debugging. Just prints the incoming URL, and calls next.
// Never sends response back.
function printIncomingRequest(req, res, next) {
  console.log("Serving", req.url);
  if (req.cookies) {
    console.log("cookies", req.cookies);
  }
  next();
}
// function that handles response from Google containintg the profiles information.
// It is called by Passport after the second time passport.authenticate
// is called (in /auth/accepted/)
function gotProfile(accessToken, refreshToken, profile, done) {
  console.log("Google profile", profile);
  let email = profile._json.hd;
  let dbRowID;
  // here is a good place to check if user is in DB,
  // and to store him in DB if not already there.
  // Second arg to "done" will be passed into serializeUser,
  // should be key to get user out of database.
  // let email = profile.body.emails;
  // let regex = /^([a-zA-Z0-9_\-\.]+)@ucdavis\.edu$/g;
  if (email == "ucdavis.edu") {
    dbRowID = 1;
  } else {
    request.get(
      "https://accounts.google.com/o/oauth2/revoke",
      {
        qs: { token: accessToken }
      },
      function(err, res, body) {
        console.log("revoked token");
      }
    );
  }
  // key for db Row for this user in DB table.
  // Note: cannot be zero, has to be something that evaluates to
  // True.

  done(null, dbRowID);
}

// Part of Server's sesssion set-up.
// The second operand of "done" becomes the input to deserializeUser
// on every subsequent HTTP request with this session's cookie.
// For instance, if there was some specific profile information, or
// some user history with this Website we pull out of the user table
// using dbRowID.  But for now we'll just pass out the dbRowID itself.
passport.serializeUser((dbRowID, done) => {
  console.log("SerializeUser. Input is", dbRowID);
  done(null, dbRowID);
});

// Called by passport.session pipeline stage on every HTTP request with
// a current session cookie (so, while user is logged in)
// This time,
// whatever we pass in the "done" callback goes into the req.user property
// and can be grabbed from there by other middleware functions
passport.deserializeUser((dbRowID, done) => {
  console.log("deserializeUser. Input is:", dbRowID);
  // here is a good place to look up user data in database using
  // dbRowID. Put whatever you want into an object. It ends up
  // as the property "user" of the "req" object.
  let userData = dbRowID;
  done(null, userData);
});

function requireUser(req, res, next) {
  console.log("require user", req.user);
  if (req.user != 1) {
    res.redirect("/");
  } else {
    console.log("user is", req.user);
    next();
  }
}

function requireLogin(req, res, next) {
  console.log("checking:", req.cookies);
  if (!req.cookies["ecs162-session-cookie"]) {
    res.redirect("/");
  } else {
    next();
  }
}

// CREATE / SELECT DATABASE
// This creates an interface to the file if it already exists, and makes the file if it does not.
const profilesDB = new sql.Database("profiles.db");
// Create table if "postcardData.db" is not found or empty
let cmd =
  "SELECT * FROM sqlite_master WHERE type='table' AND name='ProfileTable' ";
  profilesDB.get(cmd, function(err, val) {
  console.log(err, val);
  if (val == undefined) {
    console.log("No database file - creating one");
    createDatabase();
  } else {
    console.log("Database file found");
  }
});

function createDatabase() {
  const cmd =
    "CREATE TABLE ProfileTable (rowIdNum INTEGER PRIMARY KEY, image TEXT, first TEXT, last TEXT, gender TEXT, college TEXT, major TEXT, studyspot TEXT, geclass TEXT, foodtruck TEXT, bio TEXT, url TEXT)";
  profilesDB.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure", err.message);
    } else {
      console.log("Created database");
    }
  });
}

// make a unique url for each student
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// API
function sendMediaStore(filename, serverRequest, serverResponse) {
  let apiKey = process.env.ECS162KEY;
  if (apiKey === undefined) {
    serverResponse.status(400);
    serverResponse.send("No API key provided");
  } else {
    // we'll send the image from the server in a FormData object
    let form = new FormData();

    // we can stick other stuff in there too, like the apiKey
    form.append("apiKey", apiKey);
    // stick the image into the formdata object
    form.append("storeImage", fs.createReadStream(__dirname + filename));
    // and send it off to this URL
    form.submit("http://ecs162.org:3000/fileUploadToAPI", function(
      err,
      APIres
    ) {
      // did we get a response from the API server at all?
      if (APIres) {
        // OK we did
        console.log("API response status", APIres.statusCode);
        // the body arrives in chunks - how gruesome!
        // this is the kind stream handling that the body-parser
        // module handles for us in Express.
        let body = "";
        APIres.on("data", chunk => {
          body += chunk;
        });
        APIres.on("end", () => {
          // now we have the whole body
          if (APIres.statusCode != 200) {
            serverResponse.status(400); // bad request
            serverResponse.send(" Media server says: " + body);
          } else {
            serverResponse.status(200);
            serverResponse.send(body);
          }
          let slicedFilename = filename.slice(1);
          fs.unlink(slicedFilename);
        });
      } else {
        // didn't get APIres at all
        serverResponse.status(500); // internal server error
        serverResponse.send("Media server seems to be down.");
      }
    });
  }
}

// Handle a post request containing JSON
app.use(bodyParser.json());
// gets JSON data into req.body
app.post("/saveDisplay", function(req, res) {
  console.log(req.body);

  // save variables
  let profileImage = req.body.image;
  let profileFName = req.body.first;
  let profileLName = req.body.last;
  let profileGender = req.body.gender;
  let profileCollege = req.body.college;
  let profileMajor = req.body.major;
  let profileStudySpot = req.body.studyspot;
  let profileGEClass = req.body.geclass;
  let profileFoodTruck = req.body.foodtruck;
  let profileBio = req.body.bio;
  let profileUrl = makeid(22);

  // put new item into database
  cmd =
    "INSERT INTO ProfileTable (image, first, last, gender, college, major, studyspot, geclass, foodtruck, bio, url) VALUES (?,?,?,?,?,?,?,?,?,?,?) ";
  profilesDB.run(
    cmd,
    profileImage,
    profileFName,
    profileLName,
    profileGender,
    profileCollege,
    profileMajor,
    profileStudySpot,
    profileGEClass,
    profileFoodTruck,
    profileBio,
    profileUrl,
    function(err) {
      if (err) {
        console.log("DB insert error", err.message);
      }
      res.send(profileUrl);
    }
  );
});

// Next, handle post request to upload an image
// by calling the "single" method of the object uploadMulter that we made above
app.post("/upload", uploadMulter.single("newImage"), function(request,response) {
  // file is automatically stored in /images
  // WARNING!  Even though Glitch is storing the file, it won't show up
  // when you look at the /images directory when browsing your project
  // until later (or unless you open the console (Tools->Terminal) and type "refresh").
  // So sorry.
  console.log(
    "Received",
    request.file.originalname,
    request.file.size,
    "bytes"
  );
  // the file object "request.file" is truthy if the file exists
  if (request.file) {
    // Always send HTTP response back to the browser.  In this case it's just a quick note.
    sendMediaStore("/images/" + request.file.originalname, request, response);
    // response.end("Server received "+request.file.originalname);
  } else throw "error";
});

app.get("/results?*", function(request,response, next) {
  // Url processing
  let url = request.url;
  console.log(url);
  if(url.charAt(url.length-1) == '&') url = url.substring(0, url.length-1);
  let infoList = url.substring(url.indexOf("?")+1); 
  let cmd = "SELECT * FROM ProfileTable"
  // If there is data after '?', then do the following filtering, otherwise get the entire table
  if(infoList.length > 0) {
    infoList = infoList.split("&");
    cmd += " WHERE";
    for(var i = 0; i < infoList.length; i++) { // split URL and put back into object infoList
      let key = infoList[i].split("=")[0];
      let val = infoList[i].split("=")[1];
      if(key == "college" || key == "major" || key == "studyspot" || key == "geclass" || key =="foodtruck") {
        cmd += (" " + key + "='");
        let array = val.split("%20"); 
        for (i = 0; i<array.length-1; i++) {
          cmd += (array[i]+" ");
        }
        cmd += (array[array.length-1] + "'");
      }
      else{
        cmd += (" " + key + "='" + val + "'")
      }
      if(i < infoList.length-1) {
        cmd += " AND";
      }
    }
    console.log("cmd to execute: " + cmd);
    profilesDB.all(cmd, function (err, rows) {
      if (err) {
        console.log("Database reading error", err.message)
        next();
      } else {
        // send shopping list to browser in HTTP response body as JSON
        response.json(rows);
        console.log("rows",rows);
      }
    });
  }
  else {
    cmd = "SELECT * FROM ProfileTable";
    profilesDB.all(cmd, function (err, rows) {
      if (err) {
        console.log("Database reading error", err.message)
        next();
      } else {
        // send shopping list to browser in HTTP response body as JSON
        response.json(rows);
        console.log("rows",rows);
      }
    });
  }
}); 

app.get("/profile?", function(request,response, next) {
  let url = request.url;
  let infoList = url.substring(url.indexOf("?")+1); 
   console.log(infoList);
  let cmd = "SELECT * FROM ProfileTable WHERE url='" + infoList + "'";
  console.log("cmd to execute: " + cmd);
  profilesDB.all(cmd, function (err, rows) {
    if (err) {
      console.log("Database reading error", err.message)
      next();
    } else {
      response.json(rows);
      console.log("rows",rows);
    }
  });
});