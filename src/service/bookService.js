class Book {
  title = "";
  author = "";
  isbn = "";
}

class Result {
  constructor(type, message) {
    this.type = type;
    this.message = message;
    this.show = true;
  }

  static error = (message) => new Result("error", message);

  static success = (message) => new Result("success", message);
}

const emptyBook = () => new Book();

const BOOK_LIST_KEY = "bookList";

class BookService {
  create = () => emptyBook();

  update = (book, e) => {
    const copy = Object.assign(emptyBook(), book);
    copy[e.target.id] = e.target.value;
    return copy;
  };

  save = (book) => {
    if (!this.#valid(book)) {
      return Result.error("Please fill out all inputs before submitting!");
    }

    /**
     * @type {Book[]}
     */
    const bookList = JSON.parse(localStorage.getItem(BOOK_LIST_KEY)) || [];
    bookList.push(book);

    localStorage.setItem(BOOK_LIST_KEY, JSON.stringify(bookList));

    return Result.success("Book has been successfully added!");
  };

  list = () => JSON.parse(localStorage.getItem(BOOK_LIST_KEY)) || [];

  #valid = (book) => book.title && book.author && book.isbn;
}

const bookService = new BookService();
export default bookService;