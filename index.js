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

//generates new Book instance
createBook.addEventListener('click', () => {
    //receive the data from the form
    addBook()
    let anotherBook = new Book(bookName.value,author.value,pages.value);
    myLibrary.push(anotherBook);
    console.log(myLibrary);
})

//adds Book instance to DOM
function addBook() {
    const booksContainer = document.querySelector('.books-container');
    //toggle on the classlist for books, each div is going to be added to that classlist with background image of the book
    const div = document.createElement('div');
    div.classList.add('books')
    //target the div and add to the classlist
    div.textContent='hello, world';
    booksContainer.append(div)
}


//forEach item in the array, create a div, with
//x height, x width, a link tag with the title

function Book (title,author,pages){
    //instantiate the object every time data is filled out
    this.title = title,
    this.author = author,
    this.pages = pages
};
//when a book is instantiated, create genre 