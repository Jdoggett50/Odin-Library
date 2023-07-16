let myLibrary = [];

const addButton = document.querySelector('.add-button');
const background = document.querySelector('.transparent-background');
const close = document.querySelector('.close');

addButton.addEventListener('click', () => background.style.display = 'grid');
close.addEventListener('click',() => background.style.display = 'none');

const bookBtn = document.querySelector('.submit-book');
const bookName = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#total-pages');
const clearSelection = document.querySelector('.clear-selection');
const books = document.querySelector('.books');
const read = document.querySelector('.readButton');
const clearButton = document.querySelector('.remove')
let booksContainer = document.querySelector('.books-container');

clearSelection.addEventListener('click', clearForm);

function clearForm() {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input)=> input.value = '');
}

bookBtn.addEventListener('click', () => {
    if(bookName.value === '' || author.value === '' || pages.value === ''){
        alert('Please create a book');
    } else 
    addBook(bookName.value, author.value, pages.value, false);
    // clearForm();
    displayBooks();
    console.log(myLibrary);
});

function addBook(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    return myLibrary;
}

function displayBooks(){
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
    });
};

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

booksContainer.addEventListener('click', (e)=>{
    if(e.target.closest('.remove')){
        const onlyRemove = e.target.dataset.item;
        removeIndex(onlyRemove);
        displayBooks()
    }
});

function removeIndex(data){
    myLibrary = myLibrary.filter(book => book.title !== data);
    return myLibrary;
};
//we are setting the current global myLibrary to myLibrary.filters result
// and returning the new version of myLibrary to the global myLibrary
//the myLibrary.filter is looking at each book and comparing book.title
//to the data attribute on the close buttons. it's saying as long as 
//the book.title isn't equal to the data attribute on the remove button
// to return it in the new array that it has created.