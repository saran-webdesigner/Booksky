// Select the elements -- Popup

var fabbutton = document.querySelector(".fab");
var popup = document.querySelector(".overlay");
var closebutton = document.querySelector(".close");

// Add FAB Button Action
fabbutton.addEventListener("click", function () {
  popup.style.display = "block";
});

// Close the button

closebutton.addEventListener("click", function () {
  popup.style.display = "none";
});

// Select The Input Value Book name, Author , Description

var containerbox = document.querySelector(".box-container");
var maincontainer = document.querySelector(".container");
var booksname = document.getElementById("bookname");
var booksauthor = document.getElementById("author");
var descriptions = document.getElementById("descripe");
var addbutton = document.querySelector(".add");

// Submit Button Fuctionality

addbutton.addEventListener("click", function () {
  var divbox = document.createElement("div");
  divbox.className = "box-container";
  divbox.innerHTML = `<h2>${booksname.value}</h2> <h5>${booksauthor.value}</h5> <p>${descriptions.value}</p> <button onclick="deleteitem(event)">Delete</button>`;
  maincontainer.append(divbox);
  popup.style.display = "none";

  // Reset the Value

  document.getElementById("bookname").value = ""
  document.getElementById("author").value = ""
  document.getElementById("descripe").value = ""

});

// Delete Item Functionality

function deleteitem(event) {
  event.target.parentElement.remove();
}

// Reset Input Value



// Set the Input Limit




