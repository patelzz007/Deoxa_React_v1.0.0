import React, { Component } from "react";
import routes from "./routes";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout1 } from "./Layouts/Layout1/Layout1";
import { Layout2 } from "./Layouts/Layout2/Layout2";

class App extends Component {

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Router>
            <Routes>
              <Route path='/' element={<Layout1 />} />
              {/* <Route path='layout2' element={<Layout2 />} /> */}
              <Route path="about" element={<Layout2 />}></Route>
            </Routes>
          </Router>
        </React.Fragment>
      </div>
    );
  }
};

export default App;
