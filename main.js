const but = document.querySelector('.adding-cards');
let book_name;
let book_author_name;
let book_page_Number;
let isRead;
const modal = document.querySelector('.modal')
const clearAll = document.querySelector('.clear-all')







document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const bookName = formData.get("bookName");
    const authorName = formData.get("authorName");
    const numPages = formData.get("numPages");
    const isRead = formData.get("isRead") === "on" ? "Yes" : "No";

    console.log(isRead)
    console.log(typeof(isRead))

  

    book_name = bookName
    book_author_name = authorName
    book_page_Number = numPages
    // Log form data


    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    svg.classList.add("svg-icon")

    // Create title element
    var title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "backspace";

    // Create path element
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12");
    
    // Append title and path to SVG
    svg.appendChild(title);
    svg.appendChild(path);

    // Get the button element
    var button = document.createElement("button");

    // Append SVG to the button

    button.appendChild(svg);
    button.classList.add("myButton")

    var card = document.createElement("div");
    card.classList.add("card");

    var titleElement = document.createElement("h2");
    titleElement.textContent = book_name;
    card.appendChild(titleElement);

    var detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    var authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + book_author_name;
    detailsDiv.appendChild(authorElement);

    var pagesElement = document.createElement("p");
    pagesElement.textContent = "Pages: " + book_page_Number;
    detailsDiv.appendChild(pagesElement);

    card.appendChild(detailsDiv);

    var checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("checkbox-container");

    var checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxLabel.appendChild(checkboxInput);

    var checkmarkSpan = document.createElement("span");
    checkmarkSpan.classList.add("checkmark");
    checkboxLabel.appendChild(checkmarkSpan);
    var p = document.createElement('p')
    p.innerHTML= "Mark as Read"
    checkboxLabel.appendChild(p);
    card.appendChild(checkboxLabel);

    card.appendChild(button)

    if (isRead === "Yes") {
        checkboxInput.checked = true
    }

    button.addEventListener("click", () => {
        document.querySelector("body").removeChild(card)
    })

    document.querySelector("body").appendChild(card)

  var  cards = document.querySelectorAll('.card')
    clearAll.addEventListener('click',()=>{
        document.querySelector('body').removeChild(card)
    })

    modal.close()
});

but.addEventListener("click", () => {
    modal.showModal()
})



// script.js

