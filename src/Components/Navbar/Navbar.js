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

      {/*       <Button_1 path="/" text={"Главная"} focus setFocus={setFocus}/>
      <Button_1 path="/Professors" text={"Учителя"} />
      <Button_1 path="/Students" text={"Ученики"} />
      <Button_1 path="/Others" text={"Прочие"} />
      <Button_1 path="/MainProfile" text={"Login"} /> */}
    </div>
  );
};
