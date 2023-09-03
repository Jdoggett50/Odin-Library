let myLibrary = [];

const addButton = document.querySelector('.add-button');
const background = document.querySelector('.transparent-background');
const close = document.querySelector('.close');
const bookBtn = document.querySelector('.submit-book');
const bookName = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#total-pages');
const clearSelection = document.querySelector('.clear-selection');
const books = document.querySelector('.books');
const readToggle = document.querySelector('.readButton');
const clearButton = document.querySelector('.remove');
let booksContainer = document.querySelector('.books-container');

addButton.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click', () => background.style.display = 'none');

clearSelection.addEventListener('click', clearForm);

bookBtn.addEventListener('click', () => {
    if (bookName.value === '' || author.value === '' || pages.value === '') {
        alert('Please create a book');
    } else
        addBook(bookName.value, author.value, pages.value);
        clearForm();
        displayBooks();
});

booksContainer.addEventListener('click', (e) => {
    if (e.target.closest('.remove')) {
        const onlyRemove = e.target.dataset.item;
        removeIndex(onlyRemove);
        displayBooks();
    } else if (e.target.closest('.read-button')) {
        getStatus(e.target.dataset.status);
        displayBooks();
    }
});

function clearForm() {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input) => input.value = '');
}

function addBook(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
    return myLibrary;
}

function displayBooks() {
    booksContainer.textContent = '';
    myLibrary.forEach(index => {
        const divContainer = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        const readButton = document.createElement('button');
        booksContainer.append(divContainer);
        titleDiv.textContent = `${index.title}`;
        authorDiv.textContent = `${index.author}`;
        pagesDiv.textContent = `${index.pages}`;
        titleDiv.classList.add('title-div');
        authorDiv.classList.add('author-div');
        pagesDiv.classList.add('pages-div');
        divContainer.append(titleDiv);
        divContainer.append(authorDiv);
        divContainer.append(pagesDiv);
        divContainer.append(removeButton);
        divContainer.append(readButton);
        removeButton.dataset.item = `${index.title}`;
        readButton.dataset.status = `${index.title}`;
        removeButton.classList.add('remove');
        divContainer.classList.add('books');
        readButton.classList.add('read-button');
        if(index.read){
            readButton.textContent = `Read`;
        } else
            readButton.textContent = `Unread`
    });
};

function getStatus(data) {
    myLibrary.map(book => {
        if(book.title === data) {
            book.read = Book.changeStatus();
        }
    })
}

Book.changeStatus = function () {
    return this.read = !this.read;
}

class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
};

function removeIndex(data) {
    myLibrary = myLibrary.filter(book => book.title !== data);
    return myLibrary;
};