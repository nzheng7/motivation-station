var disneyQuotes = ["All our dreams can come true, if we have the courage to pursue them.", "If you can dream, you can do it. Always remember that this whole thing was started by a mouse.", "Laughter is timeless, imagination has no age, dreams are forever."];
var disneyButton = $(".walt-disney");
disneyButton.on("click", showDisneyQuote);
function showDisneyQuote() {
  var infoContainer = $(".quote-container");
  var randomQuote = disneyQuotes[Math.floor(Math.random()*disneyQuotes.length)];
  infoContainer.append(`<p>${randomQuote}</p>`);
}

var einsteinQuotes = ["Life is like riding a bicycle. To keep your balance you must keep moving.", "Anyone who has never made a mistake has never tried anything new.", "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."]
var einsteinButton = $(".albert-einstein");
einsteinButton.on("click", showEinsteinQuote);
function showEinsteinQuote() {
  var infoContainer = $(".quote-container");
  var randomQuote = einsteinQuotes[Math.floor(Math.random()*einsteinQuotes.length)];
  infoContainer.append(`<p>${randomQuote}</p>`);
}

var leoQuotes = ["When once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.", "Life is pretty simple: You do some stuff. Most fails. Some works. You do more of what works. If it works big, others quickly copy it.", "As a well-spent day brings happy sleep, so a life well spent brings happy death."]
var leoButton = $(".leonardo-da-vinci");
leoButton.on("click", showLeonardoQuote);
function showLeonardoQuote() {
  var infoContainer = $(".quote-container");
  var randomQuote = leoQuotes[Math.floor(Math.random()*leoQuotes.length)];
  infoContainer.append(`<p>${randomQuote}</p>`);
}

// var resetButton = $(".reset")
// resetButton.on("click", reset);
// function reset {
//   $(".info").detach();
// }
