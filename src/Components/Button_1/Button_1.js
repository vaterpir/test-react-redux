import React, { useState } from "react";
import "./Button_1.css";
import { Helpers } from "../Helpers";
import { Link, useLocation, useHistory } from "react-router-dom";

export const Button_1 = (props) => {
  const { text, category, path, index, setCategory } = props;
  /*   const location = useLocation();
  const history = useHistory(); */

  return (
    <div className="nav_btn">
      <Link to={path}>
        <button
          autoFocus={category}
          onClick={() => {
            setCategory(index);
          }}
          className={`btn ${category ? "visit" : ""}`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};
