import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <>
    <h1 id="heading">Namasate React using JSX 🚀</h1>
  </>
);

const HeadingComponent = () => (
  <>
    <Title />
    <h1 id="headingComponent">Namasate React using React 🚀</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
