import "./FormSubmitButton.css";

const FormSubmitButton = ({ onClickFunc }) => {
  return (
    <div>
      <input
        type="button"
        value="Submit"
        className="u-full-width"
        onClick={onClickFunc}
      />
    </div>
  );
};

export default FormSubmitButton;
