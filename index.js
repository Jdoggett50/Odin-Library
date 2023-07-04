//  form generation logic
//toggle the display property of transparent  
//background. On add, toggle display: flex;
//on close, toggle display: none;

//target the elements to add event listeners to
const addBook = document.querySelector('.add-book');
const background = document.querySelector('.transparent-background');
addBook.addEventListener('click', () => background.style.display = 'grid');

const close = document.querySelector('.close')
close.addEventListener('click',() => background.style.display = 'none');


//  instantiated book logic
//initialize empty array to store books
let myLibrary = [];
//create the constructor for each book instance
function Book (title,pages,author,genre){
    //instantiate the object every time data is filled out
    this.title = title,
    this.pages = pages,
    this.author = author,
    this.genre = genre
};
//when a book is instantiated, create genre 