import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Content } from "./Content/Content";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const key = "$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme";
const baseURL = "https://www.potterapi.com/v1";

const state = {
  data: [],
};

axios
  .get("/characters", {
    baseURL: baseURL,
    params: {
      key: key,
    },
  })
  .then(function (response) {
    console.log(response.data);
    state.data = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

export const App = () => {
  const [category, setCategory] = useState(0);
  const [data, setData] = useState(state.data);
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/">
            <Content data={state.data} />
          </Route>
          <Route path="/Professors">
            <Content />
          </Route>
          <Route path="/Students">
            <Content />
          </Route>
          <Route path="/Others">
            <Content />
          </Route>
        </Switch>
        <Navbar setCategory={setCategory} category={category} />
      </div>
    </Router>
  );
};
