Authorization: YOUR_API_KEY

var client = require('guidebox')
var Guidebox = new client('7d4cf0b3e896a3e8cc71cf02afe6169394482044', 'US');
movies = Guidebox.movies.list();

//Filter available shows by service

//Have shows display in slider based on service provider

//Example: shows = guidebox.Show.list(channel="disney_plus")
//Example: shows = guidebox.Show.list(channel="netflix")
//Example: shows = guidebox.Show.list(channel="hulu")
//Example: shows = guidebox.Show.list(channel="amazon_prime")

//sets limit for number of shows displayed
var shows = Guidebox.shows.list({limit: 12, offset: 12});

function getShows(text) {
  let endPoint = "http://api-public.guidebox.com/v2/shows?";
  let api_key = "7d4cf0b3e896a3e8cc71cf02afe6169394482044";
  let queryURL = endPoint + "?q=" + text + "&limit=12" + "&api_key=" + api_key;
}