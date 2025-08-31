import React from "react";
import { Data, Data1 } from "../App.jsx";

export default function ComponentC() {
  return (
    <div>
      <Data.Consumer>
        {(name) => (
          <Data1.Consumer>
            {(age) => (
              <h2>
                My Name is {name} and I am {age} years old.
              </h2>
            )}
          </Data1.Consumer>
        )}
      </Data.Consumer>
    </div>
  );
}
