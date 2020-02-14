import React, {Component} from "react";

import "semantic-ui-css/semantic.min.css";
import "./Vistas/Home/App.css";
import Body from './Vistas/Home/Body';
import Menu from './Vistas/Home/Menu';
import Footer from './Vistas/Home/footer';
import Login from './Vistas/Home/Login'
import Register from './Vistas/Home/Register'
import Home from "./Vistas/Home/Home1";
import Dashboard from "./Vistas/Home/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
          <Route path="/" exact component={app} />
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
  }
}
const app = () => (
  <div>
  <Body/>
  <Footer />
  </div>
)
