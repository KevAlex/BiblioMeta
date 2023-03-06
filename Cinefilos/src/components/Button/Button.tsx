import React, { SyntheticEvent } from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  classN: string;
  onClick?: (e: SyntheticEvent) => void;
};

function Button({ onClick, text, type = "button", classN }: ButtonProps) {
  return (
    <button className={classN} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
export default Button;
