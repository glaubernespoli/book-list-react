import "./Form.css";
import FormInput from "./FormInput/FormInput";
import FormSubmitButton from "./FormSubmitButton/FormSubmitButton";

const Form = ({ book, updateBook, addBook }) => {
  return (
    <form id="book-form">
      <FormInput
        id="title"
        label="Title"
        value={book.title}
        captureValue={updateBook}
      />
      <FormInput
        id="author"
        label="Author"
        value={book.author}
        captureValue={updateBook}
      />
      <FormInput
        id="isbn"
        label="ISBN#"
        value={book.isbn}
        captureValue={updateBook}
      />
      <FormSubmitButton onClickFunc={addBook} />
    </form>
  );
};

export default Form;
