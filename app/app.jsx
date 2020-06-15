const React = require('react');
const ReactDOM = require('react-dom');
const {
  BrowserRouter,
  Switch,
  Route
} = require('react-router-dom')

/* Import Components */
const Home = require('./Home');
const CreateProfile = require('./CreateProfile');
const ProfileResult = require('./ProfileResult');
// const Results = require('./Results');

// const App = () => <BrowserRouter>
// 	<Switch>
// 		<Route path="/profile*">
// 			<ProfileResult/>
// 		</Route>
//     <Route path="/results*">
// 			<Results/>
// 		</Route>
//     <Route path="*">
// 			<Home/>
// 		</Route>
// 	</Switch>
// </BrowserRouter>

if (window.location.pathname == '/create.html') {
  ReactDOM.render(<CreateProfile/>, document.getElementById('main'));
} 
// else if (window.location.href.indexOf("results") != -1) {
//   ReactDOM.render(<Results/>, document.getElementById('main'));
// }
else {
  // ReactDOM.render(<CreateProfile/>, document.getElementById('main2'));
  ReactDOM.render(<Home/>, document.getElementById('main')); 
}

