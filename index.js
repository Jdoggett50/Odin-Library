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
    addBook(bookName.value, author.value, pages.value, getStatus());
    displayBooks()
    console.log(myLibrary)
});

function addBook(title, author, pages, read) {
    //use this function to set the data on each object.
    return myLibrary.push(new Book(title, author, pages,read));
}

function removeBook() {

}

function getStatus(){
    //selecting input and reading it
    const read = document.querySelector('#read');
    if(read.checked){
        return "Read"
    } else
        return "Not Read"
}

function displayBooks(){
    booksContainer.innerHTML = '';
    myLibrary.forEach(index => {
        const divContainer = document.createElement('div');
        const span = document.createElement('span');
        const removeButton = document.createElement('button');
        booksContainer.append(divContainer);
        divContainer.classList.add('books');
        divContainer.append(removeButton);
        divContainer.append(span);
        removeButton.classList.add('remove');
        span.classList.add('book-content')
        span.textContent = `${index.title} 
        ${index.author} 
        ${index.pages}`;
    })
}

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};