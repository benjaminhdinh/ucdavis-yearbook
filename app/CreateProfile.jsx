const React = require("react");
const UploadButton = require("./UploadButton");

/* the main page for the index route of this app */
const CreateProfile = function() {
  this.state = {
        values: [
          {value: '0', label: 'Major' },
           {value: '1', label: 'Aerospace Science and Engineering' },  
           {value: '2', label: 'African American and African Studies' },   
           {value: '3', label: 'Agricultural and Environmental Education' }, 
           {value: '4', label: 'Animal Biology' },   
           {value: '5', label: 'Animal Science' }, 
           {value: '6', label: 'Animal Science and Management' },   
           {value: '7', label: 'Anthropology' },   
           {value: '8', label: 'Applied Chemistry' },  
           {value: '9', label: 'Applied Mathematics' },   
           {value: '10', label: 'Applied Physics' },   
           {value: '11', label: 'Art History' },   
           {value: '12', label: 'Art Studio' },   
           {value: '13', label: 'Asian American Studies' },   
           {value: '14', label: 'Atmospheric Science' },   
           {value: '15', label: 'Biochemical Engineering' },   
           {value: '16', label: 'Biochemistry and Molecular Biology' },   
           {value: '17', label: 'Biological Sciences' },   
           {value: '18', label: 'Biological Systems Engineering' },   
           {value: '19', label: 'Biomedical Engineering' },   
           {value: '20', label: 'Biotechnology' },   
           {value: '21', label: 'Cell Biology' },   
           {value: '22', label: 'Chemical Engineering' },   
           {value: '23', label: 'Chemical Physics' },   
           {value: '24', label: 'Chemistry' },   
           {value: '25', label: 'Chicana/Chicano Studies' },   
           {value: '26', label: 'Chinese' },   
           {value: '27', label: 'Cinema and Digital Media' },   
           {value: '28', label: 'Civil Engineering' },   
           {value: '29', label: 'Classical Civilization' },   
           {value: '30', label: 'Clinical Nutrition' },   
           {value: '31', label: 'Cognitive Science' },   
           {value: '32', label: 'Communication' },   
           {value: '33', label: 'Community and Regional Development' },   
           {value: '34', label: 'Comparative Literature' },   
           {value: '35', label: 'Computer Engineering' },   
           {value: '36', label: 'Computer Science' },   
           {value: '37', label: 'Computer Science and Engineering' },   
           {value: '38', label: 'Design' },   
           {value: '39', label: 'East Asian Studies' },   
           {value: '40', label: 'Ecological Management and Restoration' },   
           {value: '41', label: 'Economics' },   
           {value: '42', label: 'Electrical Engineering' },   
           {value: '43', label: 'English' },   
           {value: '44', label: 'Entomology' },   
           {value: '45', label: 'Environmental Engineering' },   
           {value: '46', label: 'Environmental Horticulture and Urban Forestry' },   
           {value: '47', label: 'Environmental Policy Analysis and Planning' },   
           {value: '48', label: 'Environmental Science and Management' },   
           {value: '49', label: 'Environmental Toxicology' },   
           {value: '50', label: 'Evolution, Ecology and Biodiversity' },   
           {value: '51', label: 'Food Science' },   
           {value: '52', label: 'French' },   
           {value: '53', label: 'Gender, Sexuality and Women Studies' },   
           {value: '54', label: 'Genetics and Genomics' },   
           {value: '55', label: 'Geology' },   
           {value: '56', label: 'German' },   
           {value: '57', label: 'Global Disease Biology' },   
           {value: '58', label: 'History' },   
           {value: '59', label: 'Human Development' },   
           {value: '60', label: 'Hydrology' },   
           {value: '61', label: 'International Agricultural Development' },   
           {value: '62', label: 'International Relations' },   
           {value: '63', label: 'Italian' },   
           {value: '64', label: 'Japanese' },   
           {value: '65', label: 'Landscape Architecture' },   
           {value: '66', label: 'Linguistics' },   
           {value: '67', label: 'Managerial Economics' },   
           {value: '68', label: 'Marine and Coastal Science—Coastal Environmental Processes or Marine Environmental Chemistry' },   
           {value: '69', label: 'Marine and Coastal Science—Marine Ecology and Organismal Biology' },    
           {value: '70', label: 'Marine and Coastal Science—Oceans and the Earth System' },   
           {value: '71', label: 'Materials Science and Engineering' },   
           {value: '72', label: 'Mathematical Analytics and Operations Research' },   
           {value: '73', label: 'Mathematical and Scientific Computation' },   
           {value: '74', label: 'Mathematics' },   
           {value: '75', label: 'Mechanical Engineering' },   
           {value: '76', label: 'Medieval and Early Modern Studies' },   
           {value: '77', label: 'Middle East/South Asia Studies' },   
           {value: '78', label: 'Molecular and Medical Microbiology (Formerly Microbiology)' },   
           {value: '79', label: 'Music' },   
           {value: '80', label: 'Native American Studies' },   
           {value: '81', label: 'Neurobiology, Physiology and Behavior' },   
           {value: '82', label: 'Nutrition Science' },   
           {value: '83', label: 'Pharmaceutical Chemistry' },   
           {value: '84', label: 'Philosophy' },   
           {value: '85', label: 'Physics' },  
           {value: '86', label: 'Plant Biology' },   
           {value: '87', label: 'Plant Sciences' },   
           {value: '88', label: 'Political Science' },   
           {value: '89', label: 'Political Science – Public Service' },  
           {value: '90', label: 'Psychology' },   
           {value: '91', label: 'Religious Studies' },   
           {value: '92', label: 'Russian' },   
           {value: '93', label: 'Science and Technology Studies' },   
           {value: '94', label: 'Sociology' },   
           {value: '95', label: 'Sociology—Organizational Studies' },   
           {value: '96', label: 'Spanish' },   
           {value: '97', label: 'Statistics' },   
           {value: '98', label: 'Sustainable Agriculture and Food Systems' },   
           {value: '99', label: 'Sustainable Environmental Design' },   
           {value: '100', label: 'Theatre and Dance' },   
           {value: '101', label: 'Undeclared/Exploratory Program' },   
           {value: '102', label: 'Undeclared—Fine Arts' },   
           {value: '103', label: 'Undeclared—Humanities' },   
           {value: '104', label: 'Undeclared—Life Sciences' },   
           {value: '105', label: 'Undeclared—Physical Sciences' },   
           {value: '106', label: 'Undeclared—Social Sciences' },   
           {value: '107', label: 'Viticulture and Enology' },   
           {value: '108', label: 'Wildlife, Fish and Conservation Biology' }, 
          ]
  }
    
  // initialize a state variable called "image" to the empty string
  const [imageupload, updateStateVarImage] = React.useState("");

  // function called when there is a new portrait image
  function updatePicture(newPortrait) {
    updateStateVarImage(newPortrait); // changing the state, will trigger a re-render
  }
  
  let contents = (
    <UploadButton parentUpdate={updatePicture}>Upload Image</UploadButton>
  );
  if (imageupload) {
    contents = <img src={imageupload} id="imageUpload"/>;
  }
  
  // send info to server when submit button is clicked
  const onClick = () => {
      let img = document.querySelector('#imageUpload');
      let firstName = document.querySelector('#fname');
      let lastName = document.querySelector('#lname');
      let gender = document.querySelector('#gender');
      let college = document.querySelector('#college');
      let major = document.querySelector('#major');
      let studyspot = document.querySelector('#studySpot');
      let geclass = document.querySelector('#ge');
      let foodtruck = document.querySelector('#foodTruck');
      let bio = document.querySelector('#userBio');
      let data = {
        image: img.src,
        first: firstName.value,
        last: lastName.value,
        gender: gender.value,
        college: college.value,
        major: major.value,
        studyspot: studyspot.value,
        geclass: geclass.value,
        foodtruck: foodtruck.value,
        bio: bio.innerText,
      }
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "/saveDisplay");
      // important to set this for body-parser
      xmlhttp.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      // setup callback function

    
      // changing page view --> redirect to splash page
      xmlhttp.onloadend = function(e) {
        console.log(xmlhttp.responseText);
        window.location = "https://hazel-boundless-yearbook.glitch.me/";
      };

      // all set up!  Send off the HTTP request
    
      // this data would be the profile info]
      xmlhttp.send(JSON.stringify(data));
  }
  // var bio = document.getElementById("userBio");
  // bio.addEventListener("keyup", function(){
  
  const charLimit = (e) => {
    var characters = e.target.value.length;
    if(characters > 10){
  	  e.target.value = e.target.value.substring(0,10);
    }
  };

  return (
    <div className="opaque">
    <div>
      <div className="header">
        <div className="davisImage"></div>
        <h2>Yearbook</h2>
      </div>
<div className = "flexWrapper">
  <h2 id ="creatorCaption">Please fill out ALL boxes before submitting!</h2>
      <div className="creatorWrapper">
        
        <div className="profileCreator">
          <div className="topHalfWrapper">
            <div className="imageUpload">{contents}</div>
            <div className="headersTop">
              <label htmlFor="fname">First Name:</label>
              <label htmlFor="lname">Last Name:</label>
              <label htmlFor="gender">Gender:</label>
              <label htmlFor="college">College:</label>
              <label htmlFor="major">Major:</label>
            </div>
            <div className="inputTop">
              <input type="text" className="profilePage" id="fname" name="firstName"/>
              <input type="text" className="profilePage" id="lname" name="lastName" />
              <select name="gender" className="profileDropDown" id="gender">
                <option value="select" >Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Nonbinary">Non-Binary</option>
              </select>
              <select name="college" className="profileDropDown" id="college">
                <option value="select" >College</option>
                <option value="College of Agricultural and Enironmental Sciences">College of Agricultural and Enironmental Sciences</option>
                <option value="College of Biological Sciences">College of Biological Sciences</option>
                <option value="College of Engineering">College of Engineering</option>
                <option value="College of Letters and Science">College of Letters and Science</option>
              </select>
      
              <select name="major" className="profileDropDown" id="major" >
                {this.state.values.map((obj) => {return <option value={obj.value}>{obj.label}</option>})}
              </select>
            </div>
          </div>
          <div className="topHalfWrapperMobile">
            <div className="imageUpload">{contents}</div>
              <label htmlFor="fname">First Name:</label>
                <input type="text" className="profilePage" id="fname" name="firstName"/>
              <label htmlFor="lname">Last Name:</label>
                <input type="text" className="profilePage" id="lname" name="lastName" />
              <label htmlFor="gender">Gender:</label>
                <select name="gender" className="profileDropDown" id="gender">
                  <option value="select" >Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Nonbinary">Non-Binary</option>
                </select>    
              <label htmlFor="college">College:</label>
                <select name="college" className="profileDropDown" id="college">
                  <option value="select" >College</option>
                  <option value="College of Agricultural and Enironmental Sciences">College of Agricultural and Enironmental Sciences</option>
                  <option value="College of Biological Sciences">College of Biological Sciences</option>
                  <option value="College of Engineering">College of Engineering</option>
                  <option value="College of Letters and Science">College of Letters and Science</option>
                </select>
              <label htmlFor="major">Major:</label>
                <select name="major" className="profileDropDown" id="major" >
                  {this.state.values.map((obj) => {return <option value={obj.value}>{obj.label}</option>})}
                </select>
          </div>
          <div className="bottomHalfWrapper">
            <div className="headersBottom">
              <label htmlFor="studySpot">Favorite Study Spot:</label>
              <label htmlFor="GE">Favorite GE Class:</label>
              <label htmlFor="foodTruck">Favorite Food Truck:</label>
              <label htmlFor="userBio">Tell us about yourself:</label>
            </div>
            <div className="inputBottom">
              <select name="studyspot" className="profileDropDown" id="studySpot">
                <option value="select" >No option selected</option>
                <option value="ARC Lobby">ARC Lobby</option>
                <option value="Memorial Union">Memorial Union</option>
                <option value="Peets Coffee">Peet's Coffee</option>
                <option value ="Sciences Laboratory Building">Sciences Laboratory Building</option>
                <option value="Shields Library">Shields Library</option>
                <option value="Silo">Silo</option>
                <option value ="Student Community Center">Student Community Center</option>
              </select>
              <select name="geclass" className="profileDropDown" id="ge" >
                <option value="select"  >No option selected</option>
                <option value ="ANT 002 Cultural Anthropology">ANT 002 Cultural Anthropology</option>
                <option value="CLA 010  Greek Roman and Near Eastern Mythology">CLA 010  Greek Roman and Near Eastern Mythology</option>
                <option value ="CLA 030 Greek and Latin Elements">CLA 030 Greek and Latin Elements</option>
                <option value ="CMN 003V Interpersonal Communication">CMN 003V Interpersonal Communication</option>
                <option value ="ECN 001 Economics Series">ECN 001 Economics Series</option>
                <option value ="ENL 003 Intro to Literature">ENL 003 Intro to Literature</option>
                <option value="FST 010 Food Science Folklore and Health">FST 010 Food Science Folklore and Health</option>
                <option value="NUT 010 Discoveries and Concepts in Nutrition">NUT 010 Discoveries and Concepts in Nutrition</option>
                <option value ="SOC 001 Intro to Sociology">SOC 001 Intro to Sociology</option>
              </select>
              <select name="foodtruck" className="profileDropDown" id="foodTruck" >
                <option value="select" >No option selected</option>
                <option value ="Buckhorn Grill">Buckhorn Grill</option>
                <option value ="El Rapido Grill">El Rapido Grill</option>
                <option value="Fusion Fresh Cafe">Fusion Fresh Cafe</option>
                <option value ="Green Papaya">Green Papaya</option>
                <option value="Shahs Halal Food Truck">Shah’s Halal Food Truck</option>
                <option value ="Shahs Indian Cuisine">Shah’s Indian Cuisine</option>
                <option value="Star Ginger">Star Ginger</option>
                <option value ="Teppanyaki 2 Go">Teppanyaki 2 Go</option>
                <option value ="The Red Chicken">The Red Chicken</option>
              </select>
            </div>
          </div>
          <div 
            contenteditable="true"
            placeholder="Write your bio here! (200 characters or less)"
            className="profilePageBio"
            id="userBio"
            name="bio"
          ></div>
        <div className="bottomHalfWrapperMobile">
          <div className="headersBottom">
            <label htmlFor="studySpot">Favorite Study Spot:</label>
              <select name="studyspot" className="profileDropDown" id="studySpot">
                <option value="select" >No option selected</option>
                <option value="ARC Lobby">ARC Lobby</option>
                <option value="Memorial Union">Memorial Union</option>
                <option value="Peets Coffee">Peet's Coffee</option>
                <option value ="Sciences Laboratory Building">Sciences Laboratory Building</option>
                <option value="Shields Library">Shields Library</option>
                <option value="Silo">Silo</option>
                <option value ="Student Community Center">Student Community Center</option>
              </select>
            <label htmlFor="GE">Favorite GE Class:</label>
              <select name="geclass" className="profileDropDown" id="ge" >
                <option value="select"  >No option selected</option>
                <option value ="ANT 002 Cultural Anthropology">ANT 002 Cultural Anthropology</option>
                <option value="CLA 010  Greek Roman and Near Eastern Mythology">CLA 010  Greek Roman and Near Eastern Mythology</option>
                <option value ="CLA 030 Greek and Latin Elements">CLA 030 Greek and Latin Elements</option>
                <option value ="CMN 003V Interpersonal Communication">CMN 003V Interpersonal Communication</option>
                <option value ="ECN 001 Economics Series">ECN 001 Economics Series</option>
                <option value ="ENL 003 Intro to Literature">ENL 003 Intro to Literature</option>
                <option value="FST 010 Food Science Folklore and Health">FST 010 Food Science Folklore and Health</option>
                <option value="NUT 010 Discoveries and Concepts in Nutrition">NUT 010 Discoveries and Concepts in Nutrition</option>
                <option value ="SOC 001 Intro to Sociology">SOC 001 Intro to Sociology</option>
              </select>
            <label htmlFor="foodTruck">Favorite Food Truck:</label>
              <select name="foodtruck" className="profileDropDown" id="foodTruck" >
                <option value="select" >No option selected</option>
                <option value ="Buckhorn Grill">Buckhorn Grill</option>
                <option value ="El Rapido Grill">El Rapido Grill</option>
                <option value="Fusion Fresh Cafe">Fusion Fresh Cafe</option>
                <option value ="Green Papaya">Green Papaya</option>
                <option value="Shahs Halal Food Truck">Shah’s Halal Food Truck</option>
                <option value ="Shahs Indian Cuisine">Shah’s Indian Cuisine</option>
                <option value="Star Ginger">Star Ginger</option>
                <option value ="Teppanyaki 2 Go">Teppanyaki 2 Go</option>
                <option value ="The Red Chicken">The Red Chicken</option>
              </select>
            <label htmlFor="userBio">Tell us about yourself:</label>
              <div
                contenteditable="true"
                placeholder="Write your bio here! (200 characters or less)"
                className="profilePageBioMobile"
                id="userBio"
                name="bio"
              ></div>
          </div>
        </div>
        </div>
      </div>
      <div id="submitDiv">
        <div className = "div1"></div>
          <div className = "div2"><button id = "submitButton" onClick={onClick}>Submit</button></div>
      </div>
  
    </div>
      </div>
    </div>
  );
};

module.exports = CreateProfile;
