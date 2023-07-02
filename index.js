
//  instantiated book logic
//initialize empty array to store books

//  styling logic
//when the array.length is < 0 add books will appear in the center of the page
//where the books will reside
//when the array.length > 0, remove the text in the middle of the screen and place the
//add button to top right side of content
//with each book, add a photo of a random colored closed book and toggle markup
//on the  

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