import React from "react";

export default function WithoutJsx() {
  return (
    <div>
      {React.createElement(
        "h1",
        null,
        "This is without JSX Functional Component",
      )}
      {React.createElement(
        "p",
        { id: "para1", style: { color: "red" }, className: "para" },
        React.createElement(
          "strong",
          null,
          "This is paragraph with strong tag inside",
        ),
        " and this paragraph is created without JSX",
      )}
    </div>
  );
}
