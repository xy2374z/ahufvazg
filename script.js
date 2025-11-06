

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading-screen");
  const main= document.getElementById("main-content");

  setTimeout(() => {
  loading.style.display ="none";
  main.style.display = "block";
  }, 0);

  const hiButton = document.getElementById("hiButton");
  hiButton.addEventListener("click", () => {
    alert("Hi");
    
  });

let count = 0;
const counterDisplay = document.getElementById("counter");
// Select the circle
const circle = document.getElementById("circle");

// Add click event
circle.addEventListener("click", () => {
  circle.style.backgroundColor = "green"; // turn green when clicked
  count++;
  counterDisplay.textContent = count;
});

});
