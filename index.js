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
const readButton = document.querySelector('read')

clearBook.addEventListener('click', () => {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input)=> input.value = '');
});

bookBtn.addEventListener('click', () => {
    if(bookName.value === '' || author.value === '' || pages.value === ''){
        alert('Please create a book');
    } else 
    addBook(bookName.value, author.value, pages.value);
    displayBooks()
});

function addBook(title, author, pages) {
    //use this function to set the data on each object.
    return myLibrary.push(new Book(title, author, pages));
}

function removeBook() {

}

function checkRead() {
    let isRead = false;
    if(isRead == true){
        console.log('active')
    }
    console.log('not active')
}

function displayBooks(){
    booksContainer.innerHTML = '';
    myLibrary.forEach(index => {
        const divContainer = document.createElement('div');
        const span = document.createElement('span');
        const closedButton = document.createElement('button');
        booksContainer.append(divContainer);
        divContainer.classList.add('books');
        divContainer.append(closedButton);
        divContainer.append(span);
        closedButton.classList.add('closed');
        span.classList.add('book-content')
        span.textContent = `${index.title} 
        ${index.author} 
        ${index.pages}`;
    })
}

//button to switch button "read" textContent between
//Read and unread

function Book (title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};