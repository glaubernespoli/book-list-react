import "./FormInput.css";

const FormInput = ({ id, label, value, captureValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} className="u-full-width" value={value} onChange={captureValue} />
    </div>
  );
};

export default FormInput;
