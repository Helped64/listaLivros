import './dropdown.css'

const Dropdown = ({label, items,  value, onHandleChange, binding = false}) => {
    return (<div className={`lista-suspensa`}>
        <label>{label}</label>
        <select required={binding} value={value} onChange={event => onHandleChange(event.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default Dropdown