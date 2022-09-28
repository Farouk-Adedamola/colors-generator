import "./App.css";
import React, { Fragment, useState } from "react";
import Values from "values.js";
import Singlecolor from "./Singlecolor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [getColors, setGetColors] = useState(new Values("#303F54").all(20));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(20);
      setGetColors(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          placeholder="#000000"
          className={`${error && "input"}`}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <section>
        {getColors.map((eachcolor, index) => {
          return (
            <Singlecolor
              hexCode={eachcolor.hex}
              key={index}
              {...eachcolor}
              index={index}
            />
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;
