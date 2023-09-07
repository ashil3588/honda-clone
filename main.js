// const trigger = document.getElementsByClassName("dropdown-trigger");
// const dropdownContent = document.getElementsByClassName("dropdown-content");

// trigger.addEventListener("mouseenter", function () {
//   // Show the dropdown content on mouseenter
//   dropdownContent.style.display = "block";
// });

// trigger.addEventListener("mouseleave", function () {
//   // Hide the dropdown content on mouseleave
//   dropdownContent.style.display = "none";
// });


// Get references to the dropdown items
const dropdownItems = document.querySelectorAll(".dropdown");

// Function to show the dropdown
function showDropdown() {
  this.querySelector(".dropdown-content").style.display = "block";
}

// Function to hide the dropdown
function hideDropdown() {
  this.querySelector(".dropdown-content").style.display = "none";
}

// Add event listeners for mouse enter and leave to each dropdown item
dropdownItems.forEach(item => {
  item.addEventListener("mouseenter", showDropdown);
  item.addEventListener("mouseleave", hideDropdown);
});

