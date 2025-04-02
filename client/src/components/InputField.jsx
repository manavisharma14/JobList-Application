
const InputField = ({
    label,
    type
}) => {
    return(
        <div className="form-group mt-2">
            <label>
                {label}
            </label>
            
            <input type={type}
            className="form-control"
            required
            autoComplete="off"></input>

        </div>
    )
}

export default InputField;