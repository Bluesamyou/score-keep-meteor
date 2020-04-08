import React from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";

const App = (props) => {
  const title = "Score keep";

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.playerName.value;

    if (name) {
      Players.insert({
        name: e.target.playerName.value,
        score: 0,
      });
    }
  };

  const removePlayer = (_id) => {
    console.log(_id);
    Players.remove({ _id });
  };

  const incrementScore = (_id) => {
    Players.update({ _id }, { $inc: { score: 1 } });
  };
  const decrementScore = (_id) => {
    Players.update({ _id }, { $inc: { score: -1 } });
  };
  return (
    <>
      <h1>{title}</h1>
      {props.players.map((player) => (
        <>
          <p key={player._id}>
            Player {player.name} has {player.score} point(s)
            <button
              onClick={() => {
                incrementScore(player._id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                decrementScore(player._id);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                removePlayer(player._id);
              }}
            >
              Remove Player
            </button>
          </p>
        </>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" placeholder="John" />
        <button>Add player</button>
      </form>
    </>
  );
};

Meteor.startup(function () {
  var players = [];
  Tracker.autorun(() => {
    players = Players.find({}, { sort: { score: 1 } }).fetch();
    ReactDom.render(<App players={players} />, document.getElementById("app"));
  });
});
