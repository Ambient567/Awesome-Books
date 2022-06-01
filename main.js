// Global Query Selectors
const bookContainer = document.querySelector('.book-container');
const form = document.querySelector('form');

// Class for creating new Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

// Local Storage
// Retrive books from Local storage
function getBooks() {
  let bookCollection;
  if (localStorage.getItem('bookApp') === null) {
    bookCollection = [];
  } else {
    bookCollection = JSON.parse(localStorage.getItem('bookApp'));
  }
  return bookCollection;
}

// Function to Add book to Local Storage
function addBookToLocalStorage(book) {
  const bookCollection = getBooks();
  bookCollection.push(book);
  localStorage.setItem('bookApp', JSON.stringify(bookCollection));
}

// Function to Remove Book from Local Storage
function removeBook(id) {
  const bookCollection = getBooks();
  bookCollection.forEach((book, index) => {
    if (book.id === id) {
      bookCollection.splice(index, 1);
    }
    localStorage.setItem('bookApp', JSON.stringify(bookCollection));
  });
}

// Updating the UI: Function to create a new book list in UI
function addBookToList(book) {
  bookContainer.innerHTML += `
                            
    <li class="book">"${book.title}" by ${book.author} <button type="button" class="remove">Remove</button> <span hidden>${book.id}</span></li>`;
}

// Function to show Books in UI
function displayBooks() {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
}

// Event for Displaying Books in UI
document.addEventListener('DOMContentLoaded', displayBooks);

// Add event to Book list buttons
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const currentBook = e.target.closest('.book');
    currentBook.remove();
    const id = currentBook.querySelector('span').textContent;
    removeBook(Number(id));
  }
});

// Event for submiting a new book to the list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title');
  const authorInput = document.querySelector('.author');

  // Validate inputs
  if (titleInput.value.length > 0 && authorInput.value.length > 0) {
    const newBook = new Book(titleInput.value, authorInput.value);
    addBookToList(newBook);
    addBookToLocalStorage(newBook);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
});
