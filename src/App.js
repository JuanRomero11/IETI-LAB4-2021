import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Drawer from "./components/Drawer";
import NewTask from "./components/NewTask";
import UserProfile from "./components/UserProfile";
const LoginView = () => (
  <Login />
);
const TaskView = () => (
  <NewTask />
);
const DrawerView = () => (
  <Drawer />
);

const ProfileView = () => (
  <UserProfile />
);

class App extends React.Component {


  render() {

    return (
      <Router>
      <div className="App">
       
          <div>

          <Route exact path="/" component={LoginView}/>
          <Route exact path="/NewTask" component={TaskView}/>
          <Route exact path="/UserProfile" component={ProfileView}/>
          <Route exact path="/Login" component={LoginView}/>
          <Route exact path="/Drawer" component={DrawerView}/>
          </div>
      </div>
  </Router>
    );
  }
}
export default App;