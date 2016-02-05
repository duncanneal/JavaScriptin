
/* Below is a Library Model do not change any code in this model */

var LibraryModel =  LibraryModel || (function(){
  var books = [];
  var lastBookId = 0;

  var createBook = function(author, title){
     return {"id": lastBookId++, "title": title, "author":author, "checkedOut": false };
  };

  this.addBook = function(author, title){
    var theBook = createBook(author, title);
    books = books.concat(theBook);
    return theBook;
  };

  //wrapped in a Promise...but i don't need this unless i want to find out the length of books[]
  this.getBooks = function(){
    return new Promise(function(resolve, reject){
      resolve(books);
    });
  };

 //do i need this method? not at this time...
 //this.isBookAvailable = function(bookId){
 //return books.filter(function(b){
 //return b.id == bookId && !b.checkedOut;
 //}).length > 0;
 //};

  this.checkOutBook = function(bookId){
    var booksFiltered = books.filter(function(b){
      return b.id == bookId && !b.checkedOut;
    });
    var checkedOutBook = false;
    if (booksFiltered.length === 1){
      booksFiltered[0].checkedOut = true;
      checkedOutBook = true;
    }
    return checkedOutBook;
  };

  this.checkInBook = function(bookId){
    var booksFiltered = books.filter(function(b){
      return b.id == bookId && b.checkedOut;
    });
    var checkedInBook = false;
    if (booksFiltered.length === 1){
      booksFiltered[0].checkedOut = false;
      checkedInBook = true;
    }
    return checkedInBook;
  };


  return this;
}).call({});

// Your assignment is to use this model to build you your own library.
// Your library should contain a minimum of 10,000 books.

// Programmatically create your library

// then using the library checkout and checkin a few books

/*-----------------------------------------------------------------------*/
//add a book
 //var bks = LibraryModel.addBook("Duncan", "My Story");
//did it work?
 //console.log(bks);

//make a ton of 1 book
for (var i = 0; i < 10000; i++){
  LibraryModel.addBook("Authors", "Titles");
}

var canYouCheckOutBook1 = LibraryModel.checkOutBook(1);
console.log("Checked Out book1?", canYouCheckOutBook1);

var canYouCheckOutBook1Again = LibraryModel.checkOutBook(1);
console.log("Checked Out Book 1 again?", canYouCheckOutBook1Again);

var canYouCheckInBook1 = LibraryModel.checkInBook(1);
console.log("Checked in book 1?", canYouCheckInBook1);

var canYouCheckInBook1Again = LibraryModel.checkInBook(1);
console.log("Can you check in book 1 again?", canYouCheckInBook1Again);

var canYouCheckOutBook1Finally = LibraryModel.checkOutBook(1);
console.log("Did I check out book 1 finally?", canYouCheckOutBook1Finally);

/*
LibraryModel.getBooks().then(function(books)
{
  console.log(books.length);
});
*/
