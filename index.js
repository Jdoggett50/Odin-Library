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
const booksContainer = document.querySelector('.books-container');

addButton.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click', () => background.style.display = 'none');

clearSelection.addEventListener('click', clearForm);

bookBtn.addEventListener('click', () => {
    if (bookName.value === '' || author.value === '' || pages.value === '') {
        alert('Please create a book');
    } else
        addBook(myLibrary,new Book(bookName.value, author.value, pages.value));
        clearForm();
        displayBooks();
});

booksContainer.addEventListener('click', (e) => {
    if (e.target.closest('.remove')) {
        removeIndex(e.target.dataset.item);
        displayBooks();
    } else if (e.target.closest('.read-button')) {
        getStatus(myLibrary,e.target.dataset.read);
        displayBooks();
    }
});

function clearForm() {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input) => input.value = '');
}

function addBook(arr,book){
    arr.push(book);
    return arr;
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
        removeButton.dataset.book = `${index.title}`;
        readButton.dataset.read = `${index.title}`;
        removeButton.classList.add('remove');
        divContainer.classList.add('books');
        readButton.classList.add('read-button');
        if(index.read){
            readButton.textContent = `Read`;
        } else
            readButton.textContent = `Unread`
    });
};

//I either need to give each book index a name OR I can access 
// their values outright with their indices. The problem with accessing
//their indices, is that if I choose to do that, how will i be able to
//down the road search the array for a particular book?

//I can make it so that when i click a book, it passes the title to
// a function that finds the index of it and directly sets the read
//status on that indices object.

function getStatus(arr,data) {
    //find the selected index of the book
    for(let i = 0; i < myLibrary.length; i++) {
        if(data === arr[i].title){
            return arr[i].changeStatus();
        }
    }   
}

class Book {
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read = false;

    changeStatus() {
        this.read = !this.read;
    }
}

function removeIndex(data) {
    myLibrary = myLibrary.filter(book => book.title !== data);
    return myLibrary;
};