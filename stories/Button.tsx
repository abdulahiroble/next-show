import React from "react";

export const Button = (props: {
  onClick?: any;
  children?: any;
  variant?: "default" | "black" | "white" | "red";
  type?: any;
}) => {
  const { onClick, children, variant = "default", type } = props;

  switch (variant) {
    case "white":
      return (
        <button
          className="bg-white w-20 text-black border border-black px-3 py-3 mx-2 my-2 rounded-md"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "black":
      return (
        <button
          className="bg-gray-800 w-20 text-white px-3 py-3 mx-2 my-2 rounded-md"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "red":
      return (
        <button
          className="bg-red-600 w-64 no-underline mx-auto text-white px-3 py-3 my-2 rounded-md mb-3"
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className="bg-green-800 w-40 text-white px-3 py-3 mx-2 my-2 rounded-md"
          onClick={onClick}
          style={{
            backgroundColor: "#4CAF50",
            borderRadius: "15px",
            color: "#fff",
            padding: "15px",
            fontSize: "16px",
          }}
        >
          {children}
        </button>
      );
  }
};
