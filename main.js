const books = [
  {
    title: 'Ghana Boy',
    autor: 'Ashe',
  },

  {
    title: 'Once upon a time',
    autor: 'Killy',
  },
];

const bookSection = document.querySelector('#books-section');
const addBookButton = document.querySelector('#add-book-button');

function addBook() {
  const addTitle = document.querySelector('.add-title');
  const addAuthor = document.querySelector('.add-author');

  books.push({
    title: addTitle.value,
    author: addAuthor.value,
  });

  console.log(books);
}

addBookButton.addEventListener('click', addBook);

books.forEach((book) => {
  bookSection.innerHTML += `<h4>${book.title}</h4> 
    <h4>${book.autor}</h4>
    <button>Remove</button>
    <hr>`;
});