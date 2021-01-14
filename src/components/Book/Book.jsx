import "./Book.css";
import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import bookService from "../../service/bookService";
import ResultList from "../ResultList/ResultList";

const Book = () => {
  //alert state
  const [alert, setAlert] = useState({});

  //book object state (form)
  const [book, setBook] = useState(bookService.create());
  const updateBook = (e) => setBook((book) => bookService.update(book, e));
  const clearBook = () => setBook(bookService.create());

  const [result, setResult] = useState(bookService.list());

  const submitBook = () => {
    const result = bookService.save(book);
    setAlert(result);
    if (result.type === "success") {
      clearBook();
      setResult(bookService.list());
    }
  };

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        setAlert({ show: false });
      }, 3000);
    }
  }, [alert]);

  return (
    <div className="container">
      {alert.show && <h2 className={alert.type}> {alert.message}</h2>}
      <h1>Add Book</h1>
      <Form book={book} updateBook={updateBook} addBook={submitBook} />
      <ResultList result={result} />
    </div>
  );
};

export default Book;
