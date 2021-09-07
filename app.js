// Book Class
class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }
}
// UI Class
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Flowers for Algernon",
        author: "Daniel Keyes",
        pages: "311"
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        pages: "311"
      }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    <td><a href="#" class="btn btn-success read">YES</a></td>
    
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove()
    }
  }

  static readBook(el) {
    let classes = el.classList;
    let result = classes.toggle("btn-danger")
    if (el.innerHTML === "YES") {
      el.innerHTML = "NO"
    } else {
      el.innerHTML = "YES"
    }
  }


  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
  }
}
// Store Class

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(pages) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.pages === pages) {
        books.splice(index, 1);
      }
    })
  }
}

// Event Display
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event Add
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;

  const book = new Book(title,author,pages)

  

  // Add BOok
  UI.addBookToList(book);

  // Clear Fields
  UI.clearFields();
});


// Event remove book
document.querySelector('#book-list').addEventListener('click', (e)=>{
  UI.deleteBook(e.target)
})


// Form Popup
function openForm() {
  document.getElementById('myForm').className = "d-block"
  document.getElementById('closeForm').className = "btn btn-primary d-block"
  document.getElementById('open').className = "btn btn-primary d-none"
}

function closeForm() {
  document.getElementById('myForm').className = "d-none"
  document.getElementById('open').className = "btn btn-primary d-block"
  document.getElementById('closeForm').className = "btn btn-primary d-none"

} 

// Toggle Read Status

document.querySelector('#book-list').addEventListener('click', (e)=>{
  UI.readBook(e.target)
})