//  form generation logic
//toggle the display property of transparent  
//background. On add, toggle display: flex;
//on close, toggle display: none;

//target the elements to add event listeners to
const addBook = document.querySelector('.add-book');
const background = document.querySelector('.transparent-background');
const close = document.querySelector('.close');
addBook.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click',() => background.style.display = 'none');

const bookName = document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#total-pages');

//book information needs to be save to the object 
// listen for add book click
const createBook = document.querySelector('.create-book');
createBook.addEventListener('click', () => {
    //receive the data from the form
    let anotherBook = new Book(bookName.value,author.value,pages.value);
    myLibrary.push(anotherBook);
    console.log(myLibrary);
})

//  instantiated book logic
//initialize empty array to store books
let myLibrary = [];
//create the constructor for each book instance
function Book (title,author,pages){
    //instantiate the object every time data is filled out
    this.title = title,
    this.author = author,
    this.pages = pages
};
//when a book is instantiated, create genre 