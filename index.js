let myLibrary = [];


myLibrary.push(new Book('john doggett', 'cat tales', '197'))
myLibrary.push(new Book('john doggett', 'cat tales', '197'))
myLibrary.push(new Book('john doggett', 'cat tales', '197'))

console.log(myLibrary)

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
const booksContainer = document.querySelector('.books-container')

clearBook.addEventListener('click', () => {
    const inputValues = document.querySelectorAll('label > input');
    inputValues.forEach((input)=> input.value = '');
});

bookBtn.addEventListener('click', displayBooks)


function displayBooks(){
    myLibrary.forEach(index => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        booksContainer.append(div);
        span.textContent = `${index.title} ${index.author} ${index.pages}`;
        span.classList.add('books');
        div.append(span);
        console.log(`${index.title}
        ${index.author}
        ${index.pages}`);
    })
}


function Book (title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};