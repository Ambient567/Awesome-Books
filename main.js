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

// Updating the UI: Function to create a new book list in UI
function addBookToList(book) {
  bookContainer.innerHTML += `
                            
    <li>"${book.title}" by ${book.author} <button type="button" class="remove">Remove</button> <span hidden>${book.id}</span></li>`;
}

// Event for submiting a new book to the list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title');
  const authorInput = document.querySelector('.author');

  // Validate inputs
  if (titleInput.value.length > 0 && authorInput.value.length > 0) {
    const newBook = new Book(titleInput.value, authorInput.value);
    addBookToList(newBook);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
});
