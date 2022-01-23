import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color,
    // ↑color: colorと一緒
    fontSize: "24px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
