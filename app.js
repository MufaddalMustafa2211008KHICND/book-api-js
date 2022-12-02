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
}

module.exports = ReadingList;