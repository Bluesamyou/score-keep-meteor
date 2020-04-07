import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(() => {
  Players.insert({
    name: "Shevi",
    score: 99,
  });
});
