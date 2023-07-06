let myLibrary = [];

const addButton = document.querySelector('.add-button');
const background = document.querySelector('.transparent-background');
const close = document.querySelector('.close');

addButton.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click',() => background.style.display = 'none');

const bookBtn = document.querySelector('.submit-book');
const bookName = document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#total-pages');
const clearBook = document.querySelector('.clear-book');

clearBook.addEventListener('click', () => {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input)=> input.value = '');
});

bookBtn.addEventListener('click', addBook) 

//rewrite the addBook function. It should loop through the array

function addBook() {
    let anotherBook = new Book(bookName.value,author.value,pages.value);
    const booksContainer = document.querySelector('.books-container');
    const div = document.createElement('div');
    div.classList.add('books');
    booksContainer.append(div);
    myLibrary.push(anotherBook);
};

//how do I make it so that the book is clickable?


function Book (title,author,pages){
    this.title = title,
    this.author = author,
    this.pages = pages
};