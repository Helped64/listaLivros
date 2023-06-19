import './button.css'

const Button = ({text}) => {
    return <button className={`botao `}>
        {text}
    </button>
}

export default Button