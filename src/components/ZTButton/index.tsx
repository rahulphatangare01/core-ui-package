import colorPalate from "../css/colorpalate";
import React from "react";
type PropsType = {
  children: React.ReactNode;
  bgColor: any;
};

const ZTButton = ({ children, bgColor }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: bgColor || colorPalate.primary,
        color: "black",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export default ZTButton;
