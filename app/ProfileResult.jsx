const React = require("react");

const ProfileResult = function(props) {
  let values = [
    { value: "0", label: "Major" },
    { value: "1", label: "Aerospace Science and Engineering" },
    { value: "2", label: "African American and African Studies" },
    { value: "3", label: "Agricultural and Environmental Education" },
    { value: "4", label: "Animal Biology" },
    { value: "5", label: "Animal Science" },
    { value: "6", label: "Animal Science and Management" },
    { value: "7", label: "Anthropology" },
    { value: "8", label: "Applied Chemistry" },
    { value: "9", label: "Applied Mathematics" },
    { value: "10", label: "Applied Physics" },
    { value: "11", label: "Art History" },
    { value: "12", label: "Art Studio" },
    { value: "13", label: "Asian American Studies" },
    { value: "14", label: "Atmospheric Science" },
    { value: "15", label: "Biochemical Engineering" },
    { value: "16", label: "Biochemistry and Molecular Biology" },
    { value: "17", label: "Biological Sciences" },
    { value: "18", label: "Biological Systems Engineering" },
    { value: "19", label: "Biomedical Engineering" },
    { value: "20", label: "Biotechnology" },
    { value: "21", label: "Cell Biology" },
    { value: "22", label: "Chemical Engineering" },
    { value: "23", label: "Chemical Physics" },
    { value: "24", label: "Chemistry" },
    { value: "25", label: "Chicana/Chicano Studies" },
    { value: "26", label: "Chinese" },
    { value: "27", label: "Cinema and Digital Media" },
    { value: "28", label: "Civil Engineering" },
    { value: "29", label: "Classical Civilization" },
    { value: "30", label: "Clinical Nutrition" },
    { value: "31", label: "Cognitive Science" },
    { value: "32", label: "Communication" },
    { value: "33", label: "Community and Regional Development" },
    { value: "34", label: "Comparative Literature" },
    { value: "35", label: "Computer Engineering" },
    { value: "36", label: "Computer Science" },
    { value: "37", label: "Computer Science and Engineering" },
    { value: "38", label: "Design" },
    { value: "39", label: "East Asian Studies" },
    { value: "40", label: "Ecological Management and Restoration" },
    { value: "41", label: "Economics" },
    { value: "42", label: "Electrical Engineering" },
    { value: "43", label: "English" },
    { value: "44", label: "Entomology" },
    { value: "45", label: "Environmental Engineering" },
    { value: "46", label: "Environmental Horticulture and Urban Forestry" },
    { value: "47", label: "Environmental Policy Analysis and Planning" },
    { value: "48", label: "Environmental Science and Management" },
    { value: "49", label: "Environmental Toxicology" },
    { value: "50", label: "Evolution, Ecology and Biodiversity" },
    { value: "51", label: "Food Science" },
    { value: "52", label: "French" },
    { value: "53", label: "Gender, Sexuality and Women Studies" },
    { value: "54", label: "Genetics and Genomics" },
    { value: "55", label: "Geology" },
    { value: "56", label: "German" },
    { value: "57", label: "Global Disease Biology" },
    { value: "58", label: "History" },
    { value: "59", label: "Human Development" },
    { value: "60", label: "Hydrology" },
    { value: "61", label: "International Agricultural Development" },
    { value: "62", label: "International Relations" },
    { value: "63", label: "Italian" },
    { value: "64", label: "Japanese" },
    { value: "65", label: "Landscape Architecture" },
    { value: "66", label: "Linguistics" },
    { value: "67", label: "Managerial Economics" },
    { value: "68", label: "Marine and Coastal Science—Coastal Environmental Processes or Marine Environmental Chemistry"},
    { value: "69", label: "Marine and Coastal Science—Marine Ecology and Organismal Biology"},
    { value: "70", label: "Marine and Coastal Science—Oceans and the Earth System"},
    { value: "71", label: "Materials Science and Engineering" },
    { value: "72", label: "Mathematical Analytics and Operations Research" },
    { value: "73", label: "Mathematical and Scientific Computation" },
    { value: "74", label: "Mathematics" },
    { value: "75", label: "Mechanical Engineering" },
    { value: "76", label: "Medieval and Early Modern Studies" },
    { value: "77", label: "Middle East/South Asia Studies" },
    { value: "78", label: "Molecular and Medical Microbiology (Formerly Microbiology)"},
    { value: "79", label: "Music" },
    { value: "80", label: "Native American Studies" },
    { value: "81", label: "Neurobiology, Physiology and Behavior" },
    { value: "82", label: "Nutrition Science" },
    { value: "83", label: "Pharmaceutical Chemistry" },
    { value: "84", label: "Philosophy" },
    { value: "85", label: "Physics" },
    { value: "86", label: "Plant Biology" },
    { value: "87", label: "Plant Sciences" },
    { value: "88", label: "Political Science" },
    { value: "89", label: "Political Science – Public Service" },
    { value: "90", label: "Psychology" },
    { value: "91", label: "Religious Studies" },
    { value: "92", label: "Russian" },
    { value: "93", label: "Science and Technology Studies" },
    { value: "94", label: "Sociology" },
    { value: "95", label: "Sociology—Organizational Studies" },
    { value: "96", label: "Spanish" },
    { value: "97", label: "Statistics" },
    { value: "98", label: "Sustainable Agriculture and Food Systems" },
    { value: "99", label: "Sustainable Environmental Design" },
    { value: "100", label: "Theatre and Dance" },
    { value: "101", label: "Undeclared/Exploratory Program" },
    { value: "102", label: "Undeclared—Fine Arts" },
    { value: "103", label: "Undeclared—Humanities" },
    { value: "104", label: "Undeclared—Life Sciences" },
    { value: "105", label: "Undeclared—Physical Sciences" },
    { value: "106", label: "Undeclared—Social Sciences" },
    { value: "107", label: "Viticulture and Enology" },
    { value: "108", label: "Wildlife, Fish and Conservation Biology" }
  ];
  // let url = window.location.href;
  let url = props.url;
  let newurl = "/profile?";
  newurl += url.substring(1);
  console.log(newurl);
  const xhe = new XMLHttpRequest();
  xhe.open("GET", newurl);
  xhe.addEventListener("load", function(profile) {
    if (xhe.status == 200) {
      let responseStr = xhe.responseText; // get the JSON string
      console.log(responseStr);
      let profile = JSON.parse(responseStr); // turn it into an object
      var img = document.getElementById("imageUpload");
      img.src = profile[0].image;
      var firstname = document.getElementById("first");
      firstname.innerHTML = profile[0].first;
      var lastname = document.getElementById("last");
      lastname.innerHTML = profile[0].last;
      var gender = document.getElementById("gender");
      gender.innerHTML = profile[0].gender;
      var college = document.getElementById("college");
      college.innerHTML = profile[0].college;
      var majornumber = profile[0].major;
      var major = values[majornumber].label;
      var majorDiv = document.getElementById("major");
      majorDiv.innerHTML = major;
      var studyspot = document.getElementById("studyspot");
      studyspot.innerHTML = profile[0].studyspot;
      var geclass = document.getElementById("geclass");
      geclass.innerHTML = profile[0].geclass;
      var foodtruck = document.getElementById("foodtruck");
      foodtruck.innerHTML = profile[0].foodtruck;
      var bio = document.getElementById("bio");
      bio.innerHTML = profile[0].bio;
      
      
      
      var img1 = document.getElementById("imageUpload1");
      img1.src = profile[0].image;
      var firstname1 = document.getElementById("first1");
      firstname1.innerHTML = profile[0].first;
      var lastname1 = document.getElementById("last1");
      lastname1.innerHTML = profile[0].last;
      var gender1 = document.getElementById("gender1");
      gender1.innerHTML = profile[0].gender;
      var college1 = document.getElementById("college1");
      college1.innerHTML = profile[0].college;
      var majornumber1 = profile[0].major;
      var major1 = values[majornumber1].label;
      var majorDiv1 = document.getElementById("major1");
      majorDiv1.innerHTML = major;
      var studyspot1 = document.getElementById("studyspot1");
      studyspot1.innerHTML = profile[0].studyspot;
      var geclass1 = document.getElementById("geclass1");
      geclass1.innerHTML = profile[0].geclass;
      var foodtruck1 = document.getElementById("foodtruck1");
      foodtruck1.innerHTML = profile[0].foodtruck;
      var bio1 = document.getElementById("bio1");
      bio1.innerHTML = profile[0].bio;
    } else {
      console.log("Error fetching table");
      console.log(xhe.responseText);
    }
  });
  xhe.send();

  return (
    <div className="opaque">
      <div>
        <div className="header">
          <div className="davisImage"></div>
          <h2>Yearbook</h2>
        </div>
        <div className="creatorWrapper">
          <div className="profileCreator1">
            <div className="topHalfWrapper">
              <div className="imageUpload">
                <img id="imageUpload" />
              </div>
              <div className="headersTop">
                <label htmlFor="fname">First Name:</label>
                <label htmlFor="lname">Last Name:</label>
                <label htmlFor="gender">Gender:</label>
                <label htmlFor="college">College:</label>
                <label htmlFor="major">Major:</label>
              </div>
              <div className="inputTop">
                <div id="first"></div>
                <div id="last"></div>
                <div id="gender"></div>
                <div id="college"></div>
                <div id="major"></div>
              </div>
            </div>
            
            
            <div className="topHalfWrapperMobile">
            <div className="imageUpload"><img id="imageUpload1" /></div>
              <label htmlFor="fname">First Name:</label>
              <div id="first1"></div>
              <label htmlFor="lname">Last Name:</label>
              <div id="last1"></div>
              <label htmlFor="gender">Gender:</label> 
              <div id="gender1"></div>
              <label htmlFor="college">College:</label>
              <div id="college1"></div>
              <label htmlFor="major">Major:</label>
              <div id="major1"></div>
          </div>
            
            
            <div className="bottomHalfWrapper">
              <div className="headersBottom">
                <label htmlFor="studySpot">Favorite Study Spot:</label>
                <label htmlFor="GE">Favorite GE Class:</label>
                <label htmlFor="foodTruck">Favorite Food Truck:</label>
                <label htmlFor="userBio">Bio:</label>
                <div id="bio"></div>
              </div>
              <div className="inputBottom">
                <div id="studyspot"></div>
                <div id="geclass"></div>
                <div id="foodtruck"></div>
              </div>
            </div>
            
            <div className="bottomHalfWrapperMobile">
          <div className="headersBottom">
            <label htmlFor="studySpot">Favorite Study Spot:</label>
            <div id="studyspot1"></div>
            <label htmlFor="GE">Favorite GE Class:</label>
            <div id="geclass1"></div>
            <label htmlFor="foodTruck">Favorite Food Truck:</label>
            <div id="foodtruck1"></div>
            <label htmlFor="userBio">Bio:</label>
            <div id="bio1"></div>
          </div>
        </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = ProfileResult;
