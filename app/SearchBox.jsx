const React = require('react');


/* the search bar at the bottom of our inital splash page */
const SearchBox = function(props) {
  let updateMe = props.parentUpdate;
  const onClick = () => {
    updateMe('overlay');
  }
  
  return(
  <div>
      <div className="header">
        <div className="davisImage"></div>
        <h2>Yearbook</h2>
      </div>
      <div className = "searchWrapper"> 
            <div className = "searchText">
              <p>Search for Posts</p>
              <p>Have a UC Davis Account?</p>
            </div>

            <div className = "searchButtons">
              <button className = "searchBar" onClick={onClick}>
                <div className = "searchIconWrapper"></div>
              </button>

              <a href="auth/google">
                <button className="centered" id="loginStartButton">
                  Log-In
                </button>
              </a>
            </div>
        </div>
    </div>
  );
}

module.exports = SearchBox;