import React, { useState, useEffect } from "react";
import "./Singlecolor.css";

const Singlecolor = ({ rgb, weight, index, hexCode }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexCode}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const copyHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };
  return (
    <section
      className={`each-color ${index > 15 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyHandler}
    >
      <p>{weight} %</p>
      <div className="container">
        {alert && <p className="alert">copied to clipboard</p>}
        <button type="button" onClick={copyHandler}>
          {hexValue}
        </button>
      </div>
    </section>
  );
};

export default Singlecolor;
