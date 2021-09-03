
const myLibrary = [
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



