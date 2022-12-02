//Given that I visit the site, when I first start, I expect my list to be empty.

test('Expecting Reading List to be empty at first', () => {
    expect(ReadingList).toBe([]);
})


//Given that I have an empty list,
//when I add the first book to my list then I expect numberRead to return 1.

test('on adding a book to an empty List numberRead() should return one', () => {
    //arrange
    const list = ReadingList;
    
    //act
    const book = {title: 'Harry Potter', author: 'J. K. Rowling', length: 400, year: 2001};
    list.addBook(book);

    const result = list.numberRead();

    //assert
    expect(result).toBe(1);
})


//Given that I have an empty list,
//when I add additional books to the list 
//I expect the numberRead to return the total number of books in my list.

test('', () => {
    //arrange
    const list = ReadingList;

    //act
    const book1 = {title: 'Harry Potter 1', author: 'J. K. Rowling', length: 400, year: 2001};
    const book2 = {title: 'Harry Potter 2', author: 'J. K. Rowling', length: 400, year: 2001};
    const book3 = {title: 'Harry Potter 1000', author: 'Mufaddal', length: 400, year: 1800};

    list.addBook(book1);
    list.addBook(book2);
    list.addBook(book3);

    //assert

    let result = list.numberRead();

    /*adding 3 books so answer should be 3*/
    let ans = 3;

    expect(result).toBe(ans);
})