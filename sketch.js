
// The video
let video;
// For displaying the label
let label = "waiting...";

// The classifier
let classifier;

// URL for teachable machine model
let modelURL = 'https://teachablemachine.withgoogle.com/models/-Gc-4sRLu/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(480, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  if (label == "waiting...") text(label, width / 2, height - 20);
  
  
  
  whitelist = ["https://goo.gl/maps/7iac2kdrmfeHVw2u9", "https://goo.gl/maps/VSHFGEBHrXWSxioc7", "https://goo.gl/maps/LeSG22WMLmyNpzqU7" ];
  whiteNo = Math.floor( Math.random() * whitelist.length)
  whitep = whitelist[whiteNo];
  
  blacklist = ["https://goo.gl/maps/AFWoRmEJ3bRveEtL8", "https://goo.gl/maps/YJaGZQNdYQYvceeMA", "https://goo.gl/maps/UitjnQYpmboYHNyN9"];
  blackNo = Math.floor( Math.random() * blacklist.length)
  blackp = blacklist[blackNo];
  
  asianlist = ["https://goo.gl/maps/5iM5xR3k5aUDeFNq8", "https://goo.gl/maps/i91vWqjEaomgB9Pu5", "https://goo.gl/maps/isvbiCenTRJrM4u29"];
  asianNo = Math.floor( Math.random() * asianlist.length)
  asianp = asianlist[asianNo];
  
  indianlist = ["https://goo.gl/maps/5tPDzRBWDRk9vVNz9", "https://goo.gl/maps/NLWxRNdkcsaWThxG8", "https://goo.gl/maps/YicC3GsAfpZm5zKt6"];
  indianNo = Math.floor( Math.random() * indianlist.length)
  indianp = indianlist[indianNo];
  
  

  // Pick an emoji, the "default" is train
  let emoji = "🌐";
  if (label == "white") {
    emoji = "White";
    location.href = whitep;
  } else if (label == "black") {
    emoji = "Black";
    location.href = blackp;
  } else if (label == "asian") {
    emoji = "Asian";
    location.href = asianp;
  } else if (label == "indian") {
    emoji = "Indian";
    location.href = indianp;
  } else {
    emoji = "";  
  }

  // // Draw the emoji
  textSize(80);
  text(emoji, width / 2, height - height / 4);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!  
  label = results[0].label;
  classifyVideo();
}
