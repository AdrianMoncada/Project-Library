
let myLibrary = [
  { 
    name: "Flowers for Algernon",
    author: "Daniel Keyes",
    pages: "311"
  },
  {
    name: "Ender's Game",
    author: "Orson Scott Card",
    pages: "320" 
  }
];

function Book(name,author,pages) {
  this.name = name 
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  var bookName = document.getElementById('bookName').value;
  var bookAuthor = document.getElementById('bookAuthor').value;
  var bookPages = document.getElementById('bookPages').value;

  var book1 = new Book(bookName, bookAuthor, bookPages)
  myLibrary.push(book1)
}


const book0Name = document.getElementById('book0Name');
const book0Author = document.getElementById('book0Author');
const book0Pages = document.getElementById('book0Pages');

function displayBooks() { 
for (let i = 0; i < myLibrary.length; i++) {
  if (myLibrary != []) {
    book0Name.innerText = myLibrary[i].name
    book0Author.innerText = myLibrary[i].author
    book0Pages.innerText += myLibrary[i].pages
    return
  }
}
}

displayBooks()