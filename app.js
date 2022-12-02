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
        return this.list.filter((item, index, array) => {
            if(item.book.title === title){
                return false
            }
            else{
                return true
            }
        })
    }
}

module.exports = ReadingList;