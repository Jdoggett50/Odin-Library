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
const clearButton = document.querySelector('.remove')
let booksContainer = document.querySelector('.books-container');

addButton.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click', () => background.style.display = 'none');

clearSelection.addEventListener('click', clearForm);

bookBtn.addEventListener('click', () => {
    if (bookName.value === '' || author.value === '' || pages.value === '') {
        alert('Please create a book');
    } else
        addBook(bookName.value, author.value, pages.value);
        // clearForm();
        displayBooks();
});

booksContainer.addEventListener('click', (e) => {
    if (e.target.closest('.remove')) {
        const onlyRemove = e.target.dataset.item;
        removeIndex(onlyRemove);
        displayBooks();
    } else if (e.target.closest('.read-button')) {
        // console.log(Book.changeStatus());
        getStatus(e.target.dataset.status)
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
        const span = document.createElement('span');
        const removeButton = document.createElement('button');
        const readButton = document.createElement('button');
        removeButton.dataset.item = `${index.title}`;
        booksContainer.append(divContainer);
        divContainer.classList.add('books');
        divContainer.append(removeButton);
        divContainer.append(span);
        divContainer.append(readButton);
        removeButton.classList.add('remove');
        span.classList.add('book-content');
        span.textContent = `${index.title} 
        ${index.author} 
        ${index.pages}`;
        readButton.classList.add('read-button');
        readButton.dataset.status = `${index.title}`
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