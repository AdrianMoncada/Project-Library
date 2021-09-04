
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
  addBookToList(book1)
}

function addBookToList(book) {
  const list = document.querySelector('#book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);
}

