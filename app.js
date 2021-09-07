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
}

function closeForm() {
  document.getElementById('myForm').className = "d-none"

} 

// Toggle Read Status

document.querySelector('#book-list').addEventListener('click', (e)=>{
  UI.readBook(e.target)
})