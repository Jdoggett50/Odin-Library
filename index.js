//initialize empty array to store books

let myLibrary = [];
//create the constructor for each book instance
function Book (title,pages,author,genre){
    //instantiate the object every time data is filled out
    this.title = title,
    this.pages = pages,
    this.author = author,
    this.genre = genre
};
//when a book is instantiated, create genre 