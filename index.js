let myLibrary = [];

const addButton = document.querySelector('.add-button');
const background = document.querySelector('.transparent-background');
const close = document.querySelector('.close');

addButton.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click',() => background.style.display = 'none');

const createBook = document.querySelector('.submit-book');
const bookName = document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#total-pages');

const clearBook = document.querySelector('.clear-book');
clearBook.addEventListener('click', () => {
    //target the input dom elements, remove their .values
    const inputValues = document.querySelectorAll('label > input')
    inputValues.forEach((input)=> input.value = '');
})


createBook.addEventListener('click', () => {
    //receive the data from the form
    let anotherBook = new Book(bookName.value,author.value,pages.value);
    const booksContainer = document.querySelector('.books-container');
    const div = document.createElement('div');
    div.textContent='hello, world';
    booksContainer.append(div)
    myLibrary.push(anotherBook);
    //the submit click needs to generate one div that is appended to books 
    console.log(myLibrary);
})


//forEach item in the array, create a div, with
//x height, x width, a link tag with the title

function Book (title,author,pages){
    //instantiate the object every time data is filled out
    this.title = title,
    this.author = author,
    this.pages = pages
};
//when a book is instantiated, create genre 