const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const drone = model("Drone", droneSchema);
module.exports = drone;
