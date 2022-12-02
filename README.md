# Book-Api-js

Authors: Mufaddal Mustafa and Aiman Zaheer

## API Specification
A Book should have the following model:
Book


title
String
author
String
length
int
year
int

The ReadingList should have the following model:
ReadingList


getBook()
Book(s)
addBook()
void
deleteBook()
void
getBookByRating()
Book(s)
numberRead()
int
dateRead
String
rating
int

addBook() needs to take three parameters:
A Book object
A dateRead String
A rating integer

getBookByRating() will take an integer parameter that equals a rating number. This method will return a list of all the books that have that rating.
ratings will be between 1 and 5.
getBook() and getBookByRating() will return a String that is formatted like this:

{
    'The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, *****',
    'Alices Adventures in Wonderland by Lewis Carroll, 544 pages, 1865, read on May 22, 1992,****'
}


## Acceptance Criteria
1. Given that I visit the site, when I first start, I expect my list to be empty.
1. Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.
1. Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.
1. Given that I have a book in my list, when I call removeBook("<title>") with "title" representing the title of my book that I want to delete, then when I call getBooks() the book I deleted should no longer be there.
1. Given that I have an empty list, when I add a new book I expect getBooks() to return a list of books that includes the book I added.
1. Given when I call getBooksByRating(), I should return a list of books that all have that rating.
