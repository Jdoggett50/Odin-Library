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
const clearSelection = document.querySelector('.clear-selection');
const read = document.querySelector('#read');

clearSelection.addEventListener('click', clearForm);

function clearForm() {
    const inputValues = document.querySelectorAll('label > input');
    read.checked = false;
    inputValues.forEach((input)=> input.value = '');
}

bookBtn.addEventListener('click', () => {
    if(bookName.value === '' || author.value === '' || pages.value === ''){
        alert('Please create a book');
    } else 
    addBook(bookName.value, author.value, pages.value, getStatus());
    displayBooks()

    console.log(myLibrary)
});

function addBook(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    clearForm()
    return myLibrary
}

function removeBook() {

}

function getStatus(){
    //selecting input and reading it
    if(read.checked){
        return "Read"
    }   
        return "Not Read"
}

function displayBooks(){
    let booksContainer = document.querySelector('.books-container');
    booksContainer.textContent = '';
    myLibrary.forEach(index => {
        const divContainer = document.createElement('div');
        const span = document.createElement('span');
        const removeButton = document.createElement('button');
        const readText = document.createElement('span');
        booksContainer.append(divContainer);
        divContainer.classList.add('books');
        divContainer.append(removeButton);
        divContainer.append(span);
        divContainer.append(readText);
        removeButton.classList.add('remove');
        span.classList.add('book-content')
        span.textContent = `${index.title} 
        ${index.author} 
        ${index.pages}`;
        readText.textContent = `${index.read}`;
        readText.classList.add('read-text')
    })
}

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};