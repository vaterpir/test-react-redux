import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Content } from "./Content/Content";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const key = "$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme";
const baseURL = "https://www.potterapi.com/v1";

const getData = (setData) =>
  axios
    .get("/characters", {
      baseURL: baseURL,
      params: {
        key: key,
      },
    })
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

export const App = () => {
  const [category, setCategory] = useState(0);
  const [data, setData] = useState(false);
  if (!data) getData(setData);

  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/">
            <Content data={data ? data : false} />
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
