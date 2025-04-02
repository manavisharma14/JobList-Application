const InputField = ({
    label,
    type,
    name,
    ...props
  }) => {
    return (
      <div className="form-group mt-2">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          required
          autoComplete="off"
          id={name}         // ✅ make id = name for simplicity
          name={name}
          {...props}
        />
      </div>
    );
  };
  
  export default InputField;
  
