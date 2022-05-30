const bookSection = document.querySelector('#books-section');
const addBookButton = document.querySelector('#add-book-button');

function addBook() {
  const addTitle = document.querySelector('.add-title');
  const addAuthor = document.querySelector('.add-author');
  const bookArrays = [];

  const bookObjects = {
    title: addTitle.value,
    autor: addAuthor.value,
  };
  bookArrays.push(bookObjects);
  localStorage.setItem('bookArrays', JSON.stringify(bookArrays));
  console.log(bookArrays);
  
  bookArrays.forEach((bookArray) => {
    bookSection.innerHTML += `<h4>${bookArray.title}</h4> 
      <h4>${bookArray.autor}</h4>
      <button>Remove</button>
      <hr>`;
    console.log(bookArray.title);
  });
}

addBookButton.addEventListener('click', addBook);
