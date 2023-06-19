import BookShelf from '../BookList/bookList'
import './gender.css'

const Gen = ({ gen, bookShelfs, onDeleteBook }) => {
    return (

        bookShelfs.length > 0 && <section className={`gen `} style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: gen.corPrimaria }}>
            <h3 style={{ borderColor: gen.corSecundaria }}>{gen.book}</h3>
            <div className={`bookShelfs`}>
                {bookShelfs.map((bookShelf, indication) => 
                <BookShelf key={indication} bookShelf={bookShelf} backColor={gen.corSecundaria} onDeleteBook={onDeleteBook} corPrimaria={gen.corPrimaria}/>)}
            </div>
        </section>

    )
}

export default Gen