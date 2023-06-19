import { useState } from 'react'
import Botao from '../Button/button'
import InputText from '../InputText/inputText'
import Dropdown from '../Dropdown/dropdown'
import './AddBookForm.css'

const AddForm = ({onBookAdd, gender}) => {

    const [book, setBook] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [gen, setGen] = useState('')

    const onHandleSubmit = (event) => {
        event.preventDefault()
        console.log('form enviado', book, author, description, gen )
        onBookAdd({
            book,
            author,
            description,
            gen
        })
    }

    return (
        <section className={`formulario-container `}>
            <form className={`formulario `} onSubmit={onHandleSubmit}>
                <h2>Preencha os dados do seu Livro.</h2>
                <InputText
                    binding={true}
                    label='Livro'
                    placeholder='Digite o nome do Livro'
                    value={book}
                    onHandleChange={value => setBook(value)}/>
                <InputText
                    binding={true}
                    label='Autor' 
                    placeholder='Digite o nome do Autor'
                    value={author}
                    onHandleChange={value => setAuthor(value)}/>
                <InputText
                    binding={true}
                    label='Descrição' 
                    placeholder='Digite a descrição do Livro'
                    value={description}
                    onHandleChange={value => setDescription(value)}/>
                <Dropdown 
                    binding={true}
                    label='Gênero'
                    items={gender} 
                    value={gen}
                    onHandleChange={value => setGen(value)}/>
                <Botao text='Adicionar Livro' />
            </form>
        </section>
    )
}

export default AddForm