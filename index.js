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
const bookContainer = document.querySelector('.book-container')

clearBook.addEventListener('click', () => {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input)=> input.value = '');
});

bookBtn.addEventListener('click', addBook) 

//rewrite the addBook function. It should loop through the array

function addBook() {
    let anotherBook = new Book(bookName.value,author.value,pages.value);
    myLibrary.push(anotherBook);
    //this instance method is equal to 
    anotherBook.displayBook = displayBook.bind(anotherBook);
    anotherBook.displayBook();
    //assign the new function with the 'this' binding to a method derived from a separate function
    console.log(myLibrary)
};

//create a function that will be used in the forEach method

function displayBook() {
    const div = document.createElement('div');
    div.textContent = `${this.title}`;
    div.classList.add('books')
    bookContainer.append(div);
    //add div to classList('books')
}

function Book (title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};