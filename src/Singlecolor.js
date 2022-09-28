import React, { useState, useEffect } from "react";

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
      className={`color ${index > 20 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyHandler}
    >
      <p>{weight}</p>
      <p>{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </section>
  );
};

export default Singlecolor;
