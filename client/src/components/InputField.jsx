
const InputField = ({
    label,
    type,
    name,
    id,
    ...props
}) => {
    return(
        <div className="form-group mt-2">
            <label htmlFor={id}>
                {label}
            </label>
            
            <input type={type}
            className="form-control"
            required
            autoComplete="off"
            id={id}
            name={name}
            {...props}></input>

        </div>
    )
}

export default InputField;