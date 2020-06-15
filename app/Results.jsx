const React = require("react");

const Results = function(props) {
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
    { value: "68",  label:"Marine and Coastal Science—Coastal Environmental Processes or Marine Environmental Chemistry"},
    { value: "69",  label: "Marine and Coastal Science—Marine Ecology and Organismal Biology"},
    { value: "70",  label: "Marine and Coastal Science—Oceans and the Earth System"},
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
  let updateMe = props.parentUpdate;
  let studentProfiles = [];
  let profileTable =[];
  
  const onClick = () => {
    console.log("clicked");
    // e.preventDefault();
    updateMe("profile");
  }
  
  let display = (profileTable) => {
    //displaying each result
    var profileNumber = profileTable.length; // number of results to display
    for (let i=0; i< profileNumber; i++) { 
      var htmlElements = ""; // string to hold code for each result
      let userName = profileTable[i].first + " " + profileTable[i].last; // define username based off profileTable
      let profilePicId = profileTable[i].image; // define image based off profileTable
      let profileUrl = '!' + profileTable[i].url; // link the profile to each result div (from profileTable)
      // htmlElements += '<a href="/profile.html' + profileUrl + '">';
      // htmlElements += '<div id="profileBorder" ><img src ="' +profilePicId;
      // htmlElements += '" id="profilePic"/><h1 id = "userName">' +userName;
      // htmlElements +=  '</h1></div>';
      // studentProfiles.push('<ul>' + htmlElements + '</ul>'); 
      var results = document.getElementById("resultDisplay");
      var ul = document.createElement("ul");
      var profileBorder = document.createElement("div");
      profileBorder.id = "profileBorder";
      profileBorder.addEventListener("click", function(){updateMe(profileUrl); });
      var img = document.createElement("img");
      img.src = profilePicId;
      img.id = "profilePic";
      profileBorder.appendChild(img);
      var header = document.createElement("h1");
      header.id = "userName";
      header.innerHTML = userName;
      profileBorder.appendChild(header);
      ul.appendChild(profileBorder);
      // studentProfiles.push(ul);
      results.appendChild(ul);
    }
    console.log(studentProfiles);
    // var resultDisplay = document.getElementById("resultDisplay");
    // resultDisplay.innerHTML = studentProfiles;
  }
  
  let url = props.url;
  let newurl = "/results" + url;
  const xhh = new XMLHttpRequest();
  let criteria = url.substring(1);
  if (criteria.charAt(criteria.length-1) == '&'){
    criteria = criteria.substring(0, criteria.length-1);
  }
  console.log(criteria);
  xhh.open("GET", newurl);
  // xhh.onloadend = function(e) {
  //   console.log("got", xhh.responseText);
  // };
  xhh.addEventListener("load", function(profileTable) {
      if (xhh.status == 200) {
        let responseStr = xhh.responseText;  // get the JSON string
        console.log(responseStr);
        profileTable = JSON.parse(responseStr);  // turn it into an object
        const onClick = (e) => {
          console.log("clicked");
          e.preventDefault();
          updateMe("profile");
        }
        display(profileTable);
        // let profileresults = document.getElementsByTagName("UL")
        // for ( let j =0; j<profileresults.length ; j++){
        //   profileresults[j].onClick = { function(){updateMe("profile")}};
        // }
        if (criteria.length != 0){
          var searchElements = "Results for:";
          criteria = criteria.split("&");
          for(var i = 0; i < criteria.length; i++) {
            let key = criteria[i].split("=")[0];
            let val = criteria[i].split("=")[1];
            if (key == 'major'){
              var major = values[val].label;
              searchElements += " " + major + ",";
            }
            else{
              searchElements += " " + val + ","; 
            }
          }
          searchElements = searchElements.substring(0,searchElements.length-1);
          console.log(searchElements);
          var headercriteria = document.getElementById("resultsText");
          headercriteria.innerHTML = searchElements;
        }
      } else {
        console.log("Error fetching table");
        console.log(xhh.responseText);
      }
  });
  xhh.send();
 
  return (
    <div className="opaque">
      <div>
        <div className="header">
          <div className="davisImage"></div>
          <h2>Yearbook</h2>
        </div>
        <div className="resultsHeader">
          <div id="resultsText">Results</div>
        </div>
          <div id="resultDisplay"></div>
      </div>
    </div>
  );
};

module.exports = Results;
