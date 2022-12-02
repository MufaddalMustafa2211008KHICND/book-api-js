//Given that I visit the site, when I first start, I expect my list to be empty.

test('Expecting Reading List to be empty at first', () => {
    expect(ReadingList).toBe([])
})


//Given that I have an empty list,
//when I add the first book to my list then I expect numberRead to return 1.

test('on adding a book to an empty List numberRead() should return one', () => {
    //arrange
    const list = ReadingList;
    
    //act
    const book = {title: 'Harry Potter', author: 'J. K. Rowling', length: 400, year: 2001}
    list.addBook(book)

    const result = list.numberRead() 

    //assert
    expect(result).toBe(1)
})