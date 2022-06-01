/* eslint-disable no-unused-vars */
const bookSection = document.querySelector('#books-section');
const addBookButton = document.querySelector('#add-book-button');
const addTitle = document.querySelector('.add-title');
const addAuthor = document.querySelector('.add-author');

const bookArrays = JSON.parse(localStorage.getItem('session')) || [];

function retrieveFormData() {
  bookArrays.forEach((bookArray, i) => {
    bookSection.innerHTML += `<h4>${bookArray.title}</h4> 
      <h4>${bookArray.autor}</h4>
      <button class = 'remove' onclick="removeBook(${i})">Remove</button>
      <hr>`;
  });
}

function addBook() {
  if (addTitle.value !== '' && addAuthor.value !== '') {
    const bookObjects = {
      title: addTitle.value,
      autor: addAuthor.value,
    };
    bookArrays.push(bookObjects);
    retrieveFormData();
    localStorage.setItem('session', JSON.stringify(bookArrays));
    window.location.reload();
  }
}

window.onload = () => {
  if (localStorage.getItem('session')) {
    const session = JSON.parse(localStorage.getItem('session'));
  }
  retrieveFormData();
};

// Event for Displaying Books in UI
document.addEventListener('DOMContentLoaded', displayBooks);

function removeBook(index) {
  bookArrays.splice(index, 1);
  localStorage.setItem('session', JSON.stringify(bookArrays));
  retrieveFormData();
  window.location.reload();
}