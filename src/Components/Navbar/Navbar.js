import React, { useState } from "react";
import { Button_1 } from "../Button_1/Button_1";
import "./Navbar.css";

export const Navbar = ({ category, setCategory }) => {
  return (
    <div className="navbar">
      {[
        { path: "/", name: "Главная" },
        { path: "/Professors", name: "Учителя" },
        { path: "/Students", name: "Ученики" },
        { path: "/Others", name: "Прочие" },
        { path: "/MainProfile", name: "Login" },
      ].map(({ path, name }, index) => (
        <Button_1
          path={path}
          text={name}
          category={index === category}
          key={index}
          index={index}
          setCategory={setCategory}
        />
      ))}
    </div>
  );
};
