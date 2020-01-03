const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const serviceProviderSeed = [
  {
    name: "Netflix",
    url: "https://www.netflix.com/Login"
  },
  {
    name: "Apple Tv Plus",
    url: "https://tv.apple.com/?ign-itscg=MC_20000&ign-itsct=atvp_brand_omd&mttnagencyid=1625&mttncc=US&mttnpid=62092&mttnsiteid=143238&mttnsubad=OUS2019827-2"
  },
  {
    name: "Hulu",
    url: "https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fsearch.yahoo.com%2F"
  },
  {
    name: "Disney Plus",
    url: "www.disneyplus.com/login"
  },
];

db.ServiceProvider
  .remove({})
  .then(() => db.ServiceProvider.collection.insertMany(serviceProviderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
