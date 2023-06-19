import './exbutton.css'

const Button = ({text, onClick, corPrimaria}) => {
    return <button className={`button `} onClick={onClick} style={{ background: corPrimaria }}>
        {text}
    </button>
}

export default Button