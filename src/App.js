import "./App.css";
import React, { Fragment, useState } from "react";
import Values from "values.js";
import Singlecolor from "./Singlecolor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [getColors, setGetColors] = useState(new Values("#303F54").all(15));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(15);
      setGetColors(colors);
      color("");
      console.log(colors);
    } catch (error) {
      setError(true);
    }
  };

  document.getElementById("body").style.backgroundColor = `${color}`;

  return (
    <Fragment>
      <section className="section">
        <h1>Color generator</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={color}
            placeholder="#000000"
            className={`input ${error && "error"}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </section>
      <section className="map-area">
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
