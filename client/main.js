import React from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";

const App = () => {
  return <h1>this is the new heading</h1>;
};

Meteor.startup(function () {
  let jsx = <h1>This is a heading</h1>;
  ReactDom.render(<App />, document.getElementById("app"));
});
