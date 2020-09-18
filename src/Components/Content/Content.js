import React from "react";

export const Content = ({ data }) => (
  <div className="longContent">
    {data
      ? data.map((person, index) => {
          return (
            <div key={index}>
              <div>{person.name}</div>
              <div>{person._id}</div>
            </div>
          );
        })
      : ""}
  </div>
);
