import './inputText.css'

const InputText = ({ label, placeholder, value, onHandleChange, binding = false }) => {
    return (
    <div className={`campo-texto `}>
        <label>{label}</label>
        <input value={value} onChange={event => onHandleChange(event.target.value)} required={binding} placeholder={placeholder}/> 
    </div>
    )
}

export default InputText