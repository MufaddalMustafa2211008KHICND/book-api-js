class ReadingList {

    list = [];

    getBooks = () => {
        return this.list;
    }

    addBook = (bookItem) => {
        this.list.push(bookItem);
    }

    numberRead = () => {
        return this.list.length;
    }

    deleteBook = (title) => {
        this.list = this.list.filter((item, index, array) => {
            return item.book.title !== title
        })
    }

    
}

module.exports = ReadingList;