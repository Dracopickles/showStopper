Authorization: YOUR_API_KEY

var client = require('guidebox')
var Guidebox = new client('7d4cf0b3e896a3e8cc71cf02afe6169394482044', 'US');
movies = Guidebox.movies.list();

//Filter available shows by service

//Have shows display in slider based on service provider

//Example: shows = guidebox.Show.list(channel="hbo")
//Example: shows = guidebox.Show.list(channel="netflix")
//Example: shows = guidebox.Show.list(channel="hulu")
//Example: shows = guidebox.Show.list(channel="amazon_prime")

//sets limit for number of shows displayed
var shows = Guidebox.shows.list({limit: 12, offset: 12});

// "tv_everywhere_web_sources": [
//   {
//       "source": "hbo",
//       "display_name": "HBO GO",
//       "tv_channel": "HBO",
//       "id": 8641625,
//       "link": "http://www.hbogo.com/#series/video&assetID=GOROSTGP55610?videoMode=embeddedVideo/"
//   }
//   ]
