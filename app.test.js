const ReadingList = require('./app');


//Given that I visit the site, when I first start, I expect my list to be empty.

test('Expecting Reading List to be empty at first', () => {

    //act
    const list = new ReadingList();

    //assert
    expect(list.getBooks().length).toBe(0);
})


//Given that I have an empty list,
//when I add the first book to my list then I expect numberRead to return 1.

test('on one book to an empty List numberRead() should return one', () => {
    //arrange
    const list = new ReadingList();
    
    //act
    const book = {title: 'Harry Potter', author: 'J. K. Rowling', length: 400, year: 2001};
    list.addBook({book: book, dateRead: 'nov 1, 2022', rating: 5});

    const result = list.numberRead();

    //assert
    expect(result).toBe(1);
})


//Given that I have an empty list,
//when I add additional books to the list 
//I expect the numberRead to return the total number of books in my list.

test('On Adding three books to an empty, numberRead() should return total number of books', () => {
    //arrange
    const list = new ReadingList();

    //act
    const book1 = {title: 'Harry Potter 1', author: 'J. K. Rowling', length: 400, year: 2001};
    const book2 = {title: 'Harry Potter 2', author: 'J. K. Rowling', length: 400, year: 2001};
    const book3 = {title: 'Harry Potter 1000', author: 'Mufaddal', length: 400, year: 1800};

    list.addBook({book: book1, dateRead: 'nov 1, 2022', rating: 4});
    list.addBook({book: book2, dateRead: 'nov 1, 2022', rating: 4});
    list.addBook({book: book3, dateRead: 'nov 1, 2022', rating: 4});

    //assert

    let result = list.numberRead();

    /*adding 3 books so answer should be 3*/
    let ans = 3;

    expect(result).toBe(ans);
})


//Given that I have a book in my list,
//when I call removeBook("<title>") with "title" representing the title of my book that I want to delete, 
//then when I call getBooks() the book I deleted should no longer be there.

test('I have a book in my List, when I deleteBook() with title, the book should not be there in the list', () => {
    //arrange
    const list = new ReadingList();
    const book1 = {title: 'Harry Potter 1', author: 'J. K. Rowling', length: 400, year: 2001};
    const book2 = {title: 'Mewowwwwww', author: 'J. K. Rowling', length: 400, year: 2001};
    list.addBook({book: book1, dateRead: 'nov 1, 2022', rating: 4});
    list.addBook({book: book2, dateRead: 'nov 1, 2022', rating: 4});

    //act
    let bookToDelete = 'Harry Potter 1'
    list.deleteBook(bookToDelete);

    const books = list.getBooks();


    //assert
    let isBookInList = true;

    for(let i=0 ; i<books.length ; i++){
        if(books[i].book.title !== bookToDelete){
            isBookInList = false
        } 
    }

    expect(isBookInList).toBe(false);
})


//Given that I have an empty list,
//when I add a new book I expect getBooks() to return a list of books that includes the book I added.

test('on Adding a new book to an empty list, then getBooks() should return the book I added', () => {
    //arrange
    const list = new ReadingList();

    //act
    const newBook = {title: 'Amazing Book', author: 'Aiman', length: 2000, year: 2022};
    list.addBook({book: newBook, dateRead: 'nov 1, 2022', rating: 4});

    //assert
    expect(list.getBooks()[0].book).toBe(newBook)
})


//Given when I call getBooksByRating(), 
//I should return a list of books that all have that rating.

test('on Calling getBooksByRating(), it should return all books by that rating', () => {
    //arrange
    const list = new ReadingList();

    const newBook1 = {title: 'Amazing Book1', author: 'Aiman', length: 2000, year: 2022};
    const newBook2 = {title: 'Amazing Book2', author: 'Aiman', length: 2000, year: 2022};
    const newBook3 = {title: 'Amazing Book3', author: 'Aiman', length: 2000, year: 2022};
    list.addBook({book: newBook1, dateRead: 'nov 1, 2022', rating: 4});
    list.addBook({book: newBook2, dateRead: 'nov 1, 2022', rating: 1});
    list.addBook({book: newBook3, dateRead: 'nov 1, 2022', rating: 4});

    //act

    /*rating we are looking for is 4 */
    let ourExpectedRating = 4;

    const bookByRating = list.getBooksByRating(ourExpectedRating)

    //assert

    let allBooksAreByExpectedRating = true;

    for(let i=0 ; i<bookByRating.length ; i++){
        console.log(bookByRating[i].book.title, bookByRating[i].rating)
        if(bookByRating[i].rating !== ourExpectedRating){
            isBookInList = false
        } 
    }

    expect(allBooksAreByExpectedRating).toBe(true)
})