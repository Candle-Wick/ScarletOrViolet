// Array of two random colours
const colours = ['#FF2400', '#7F00FF']; // Example colours: red and green

// Function to change background colour
function changeBackgroundColour() {
  const randomIndex = Math.floor(Math.random() * colours.length);
  document.body.style.backgroundColor = colours[randomIndex];
}

// Call the function when the page loads
window.onload = changeBackgroundColour;
