const React = require('react');
const Overlay = require('./Overlay');
const SearchBox= require('./SearchBox');
const Results = require('./Results');
const ProfileResult = require('./ProfileResult');

/* the search bar at the bottom of our inital splash page */
const Home = function(props) {
  const [currentPage, updatePage] = React.useState("home");
  function updateMe(newPage){
    updatePage(newPage);
  }
  let contents;
  console.log(currentPage);
  if (currentPage == "home") {contents = <SearchBox parentUpdate={updateMe}></SearchBox>};
  if (currentPage == "overlay") {contents = <Overlay parentUpdate={updateMe}></Overlay>};
  if (currentPage[0] == '?') {
    contents = <Results parentUpdate={updateMe} url={currentPage}></Results>
  };
  if (currentPage[0] == '!') {
    contents = <ProfileResult parentUpdate={updateMe} url ={currentPage}></ProfileResult>
  };
  
  return (
    <div>
      {contents}
    </div>
  );
}

module.exports = Home;