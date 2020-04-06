import React from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";

const players = [];

Meteor.startup(function () {
  let jsx = <h1>This is a heading</h1>;
  ReactDom.render(jsx, document.getElementById("app"));
});
