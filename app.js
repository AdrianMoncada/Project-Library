// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}
// UI Class
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Flowers for Algernon",
        author: "Daniel Keyes",
        isbn: "311"
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        isbn: "311"
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
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
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
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title,author,isbn)

  console.log(book)
})
// Event remove
