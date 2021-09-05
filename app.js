
const myLibrary = [];


function addBookToLibrary() {
  function Book(name,author,pages) {
    this.name = name 
    this.author = author
    this.pages = pages
  }

  var bookName = document.getElementById('bookName').value;
  var bookAuthor = document.getElementById('bookAuthor').value;
  var bookPages = document.getElementById('bookPages').value;

  var book1 = new Book(bookName, bookAuthor, bookPages)
  myLibrary.push(book1)
  addBookToList(book1)
}

function addBookToList(book) {
  const list = document.querySelector('#book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a onclick="deleteItem()" href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);
}

const button = document.getElementById('show')

const hideform = document.getElementsByClassName('hideform')

button.addEventListener('click', function() {
document.getElementById('formElement').style.display = 'block';
document.getElementById('show').style.display = 'none';
})

const close = document.getElementById('close')

close.addEventListener('click', function() {
document.getElementById('formElement').style.display = 'none';
document.getElementById('show').style.display = 'block';
})

function deleteItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
