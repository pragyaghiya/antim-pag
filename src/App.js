import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Courses from "./Courses";
import Home from "./Home";
import Checkout from "./Components/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseScreen from "./Components/CourseScreen";


function App() {
  return (
    <Router>
      
    <div className="h-screen">
      <Navbar /> 
      <Switch>
      <Route exact path="/Courses">
            <Courses />
          </Route>
          <Route exact path="/Courses/:courseId">
            <CourseScreen />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer  />
      
    </div>
    </Router>
  );
}

export default App;
