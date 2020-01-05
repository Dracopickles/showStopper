const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appleTvPlusSchema = new Schema({
  user: { type:String, required: true},
  email: { type:String, required: true },
  password: { type:String, required: true}
});

const AppleTvPlus = mongoose.model("AppleTvPlus", appleTvPlusSchema);

module.exports = AppleTvPlus;