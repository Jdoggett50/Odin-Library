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
let booksContainer = document.querySelector('.books-container');

clearBook.addEventListener('click', () => {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input)=> input.value = '');
});

bookBtn.addEventListener('click', () => {
    if(bookName.value === '' || author.value === '' || pages.value === ''){
        alert('Please create a book');
    } else 
    addBook(bookName.value, author.value, pages.value);
    booksContainer.innerHTML = '';
    displayBooks()
})

function addBook(title, author, pages) {
    //use this function to set the data on each object
    return myLibrary.push(new Book(title, author, pages));
}

//each iteration of forEach adds the length of the array plus 1 every time a book is added.

function displayBooks(){
    myLibrary.forEach(index => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        booksContainer.append(div);
        span.textContent = `${index.title} ${index.author} ${index.pages}`;
        div.classList.add('books');
        div.append(span);
    })
}

function Book (title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};