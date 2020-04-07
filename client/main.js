import React from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";

Tracker.autorun(() => {
  console.log(Players.find().fetch());
});
const App = () => {
  const players = [
    {
      _id: 1,
      name: "Lauran",
      score: 99,
    },
    {
      _id: 2,
      name: "Steve",
      score: -1,
    },
    {
      _id: 3,
      name: "Blue",
      score: 12,
    },
  ];
  const title = "Score keep";
  return (
    <>
      <h1>{title}</h1>
      {players.map((player) => (
        <p key={player._id}>
          Player {player.name} has {player.score} point(s)
        </p>
      ))}
    </>
  );
};

Meteor.startup(function () {
  let jsx = <h1>This is a heading</h1>;
  ReactDom.render(<App />, document.getElementById("app"));
});
