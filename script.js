// Get the input element by its ID "input-text"
const input = document.getElementById("input-text");

// Get the list item element by its ID
const listItem = document.getElementById("list-item");

// Function to create a new list item
function createList() {
  // Check if the input value is empty
  if (input.value === "") {
    // Display an alert if the input value is empty
    alert("Cannot be Blank!");
  } else {
    // Create a new list item element
    let li = document.createElement("li");

    // Set the inner HTML of the list item to the input value
    li.innerHTML = input.value;

    // Append the list item to the list
    listItem.appendChild(li);

    // Create a new span element
    let span = document.createElement("span");

    // Set the inner HTML of the span to "✕" (a close symbol)
    span.innerHTML = "✕";

    // Append the span to the list item
    li.appendChild(span);
  }

  // Clear the input value after creating the list item
  input.value = "";

  // Save the updated data to localStorage
  saveData();
}

// Event listener for clicks on the list item
listItem.addEventListener("click", function (e) {
  // Check if the clicked target is a list item
  if (e.target.tagName === "LI") {
    // Toggle the "checked" class of the list item
    e.target.classList.toggle("checked");

    // Save the updated data to localStorage
    saveData();
  } else if (e.target.tagName === "SPAN") {
    // Remove the parent element (list item) of the clicked span
    e.target.parentElement.remove();

    // Save the updated data to localStorage
    saveData();
  }
});

// Function to save data to localStorage
function saveData() {
  // Store the inner HTML of the list item in localStorage
  localStorage.setItem("data", listItem.innerHTML);
}

// Function to show saved tasks when the page loads
function showTask() {
  // Set the inner HTML of the list item to the saved data from localStorage
  listItem.innerHTML = localStorage.getItem("data");
}

// Call the function to show saved tasks when the page loads
showTask();
