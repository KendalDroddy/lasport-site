var myVar;

function randomQuote() {
  myVar = setInterval(newQuote, 10000);
}

function newQuote() {
  var random = Math.floor(Math.random() * (cyclingQuotes.length));

  document.getElementById("quote-p").textContent = cyclingQuotes[random];
}


var cyclingQuotes = ["\"Ride as much or as little, as long or as short as you feel. But ride.\" - Eddy Merckx",
                     "\"Don't buy upgrades, ride up grades.\" - Eddy Merckx",
                     "\"When my legs hurt I say, \'Shut up legs! Do what I tell you to do!\'\" - Jens Voigt",
                     "\"It never gets easier, you just get faster.\" - Greg LeMond",
                     "\"You can't get good by staying home. If you want to get fast, you have to go where the fast guys are.\" - Steve Larsen",
                     "\"If you go with a break, you can either win or not win. If you don't go for it, you definitely won't win.\" - Jens Voigt",
                     "\"As long as I breathe, I attack.\" - Bernard Hinault"
];

randomQuote();