import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// App compoenets
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* Header will be present in all times so we dont need to add this to the route */}
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <About title={"About"} />} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;
