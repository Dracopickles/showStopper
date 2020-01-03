const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const disneyPlusSchema = new Schema({
  user: { type:String, required: true},
  
  email: { type:String, required: true },
  password: { type:String, required: true}
});

const Disney = mongoose.model("AppleTvPlus", appleTvPlusSchema);

module.exports = AppleTvPlus;