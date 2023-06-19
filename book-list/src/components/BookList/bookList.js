import './bookList.css'
import Button from '../ExcludeButton/exbutton';

const BookShelf = ({ bookShelf, backColor, onDeleteBook, corPrimaria}) => {
    const handleDelete = () => {
        onDeleteBook(bookShelf);
    };
    return (<div className={`bookShelf`} style={{ backgroundColor: backColor }}>
        <div className="cabecalho" style={{ backgroundColor: backColor }}>
            <h4>Livro: {bookShelf.book}</h4>
            <h5>Autor: {bookShelf.author}</h5>
            <h6>Descrição: {bookShelf.description}</h6>
            <Button onClick={handleDelete} text='Excluir' corPrimaria={corPrimaria}></Button>
        </div>
    </div>)
}

export default BookShelf