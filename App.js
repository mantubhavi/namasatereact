import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 1 }, [
    React.createElement("h1", { key: 2 }, "I'm an h1 tag"),
    React.createElement("h2", { key: 3 }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: 4 }, [
    React.createElement("h1", { key: 5 }, "I'm an h1 tag"),
    React.createElement("h2", { key: 6 }, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
