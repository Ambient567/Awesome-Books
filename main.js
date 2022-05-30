const bookSection = document.querySelector('#books-section');
const addBookButton = document.querySelector('#add-book-button');

function addBook() {
  const addTitle = document.querySelector('.add-title');
  const addAuthor = document.querySelector('.add-author');
  
  let bookArrays = JSON.parse(localStorage.getItem('session')) || [];

  if(addTitle.value = !null && addAuthor.value){
    const bookObjects = {
      id: bookArrays.length,
      title: addTitle.value,
      autor: addAuthor.value,
    }
    bookArrays.push(bookObjects);  
    localStorage.setItem('session', JSON.stringify(bookArrays));
  }else{
    alert('no input detected')
  }
}

function retrieveFormData() {
  const session = JSON.parse(localStorage.getItem('session')) || [];
  session.forEach((bookArray) => {
    if (session){
    bookSection.innerHTML += `<h4>${bookArray.title}</h4> 
      <h4>${bookArray.autor}</h4>
      <button value = '${bookArray.id}' class = 'remove'>Remove</button>
      <hr>`;
  }
})
};


function removeBook() {
  let bookRemove = JSON.parse(localStorage.getItem('session'));
  let x = removeButton.innerHTML
  console.log(x)
  localStorage.setItem('session', JSON.stringify(bookRemove));
  console.log(bookRemove)

}


retrieveFormData();
addBookButton.addEventListener('click', addBook);

document.querySelectorAll('.remove').forEach((n) => n.addEventListener('click', () => {
  let bookRemove = JSON.parse(localStorage.getItem('session'));
  console.log(n)
  //console.log(n.indexOf())
  bookRemove.splice(n, 1)
  localStorage.setItem('session', JSON.stringify(bookRemove));
}));
