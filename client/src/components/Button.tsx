import React from "react";

interface ButtonProps {
  onClick: any;
  text?: string;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-14 my-5 focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
};
