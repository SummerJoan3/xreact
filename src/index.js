import { render, Component, PureComponent } from "./xreact-dom";
import xReact from "./xreact";
function Comp2() {
  return xReact.createElement(
    "div",
    {},
    "aa",
    xReact.createElement("h1", {}, "c"),
    [
      xReact.createElement("h1", {}, "c"),
      ,
      xReact.createElement("h1", {}, "c"),
    ],
    xReact.createElement("h1", {}, "cc")
  );
}

class Comp1 extends PureComponent {
  render() {
    return xReact.createElement(
      "div",
      {},
      "aa",
      xReact.createElement("h1", {}, "bb"),
      xReact.createElement("h1", {}, "bb")
    );
  }
}

const app = document.querySelector("#app");
render(xReact.createElement(Comp1, {}), app);
