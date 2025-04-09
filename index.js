// Desc: Javascript Portion of the Final Sprint
// Author: Abiodun Magret Oyedele, Jeff Woolridge, Taylor Carter, Lana Starkes
// Dates: 8th April 2025 - 

var $ = function (id) {
  return document.getElementById(id);
};

// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

const per2Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

// Start function definitions here.

// Function shows greetings
function showGreetingDatesQuotes() {
  let CurDate = new Date();
  let CurHour = CurDate.getHours(); // This returns a value from 0-24

  // gets greetings
  let Greeting = "";
  if (CurHour >= 6 && CurHour <= 12) {
    Greeting = "Good Morning";
  } else if (CurHour >= 12 && CurHour <= 18) {
    Greeting = "Good Afternoon";
  } else if (CurHour >= 18 && CurHour <= 24) {
    Greeting = "Good Evening";
  } else {
    Greeting = "Good Night";
  }

  const dateStr = CurDate.toDateString();

  const quotesArray = [
    "God's time is the best",
    "The early bird gets the worm",
    "A stitch in time, saves nine",
    "Don't eat yellow snow",
    "Happiness depends upon ourselves",
    "Keep your face to the sunshine and you cannot see a shadow",
    "The only time you fail is when you fall down and stay down",
    "Positive anything is better than negative nothing",
    "It’s not whether you get knocked down, it’s whether you get up",
    "If you want light to come into your life, you need to stand where it is shining",
    "Be so happy that, when other people look at you, they become happy too",
    "No one is perfect – that’s why pencils have erasers",
    "Live life to the fullest and focus on the positive",
    "You always pass failure on the way to success",
    "It always seems impossible until it is done",
    "It makes a big difference in your life when you stay positive",
    "If opportunity doesn’t knock, build a door",
    "Hard work keeps the wrinkles out of the mind and spirit",
    "Success is the sum of small efforts repeated day in and day out"
  ];

  // Gets random quotes
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const singleQuote = quotesArray[randomIndex];

  message = `${Greeting} - ${singleQuote} - ${dateStr}`;

  document.getElementById("quotes").textContent = message;
}

// The banner will be a slideshow. Create 4 – 5 images based on a
// theme and cycle through every 4 – 5 seconds. NOTE: may need to
// crop images to get the proportion (~1000 x 150)

let step = 0;
let images = new Array();
images[0] = "Images/image0.jpg";
images[1] = "Images/image1.jpg";
images[2] = "Images/image2.jpg";
images[3] = "Images/image3.jpg";
images[4] = "Images/image4.jpg";
// images[5] = "Images/image5.jpg";
// images[6] = "Images/image6.jpg";
// images[7] = "Images/image7.jpg";
// images[8] = "Images/image8.jpg";
// images[9] = "Images/image9.jpg";
// images[10] = "Images/image10.jpg";

function gallery() {
  document.getElementById("slideshow").src = images[step];

  if (step < images.length - 1) {
    step++;
  } else {
    step = 0;
  }
}

// slide show
window.onload = setInterval(gallery, 3000);

// Shows this when the page loads
window.onload = showGreetingDatesQuotes;
