import { useState } from "react";
import AddForm from "./components/AddBookForm/AddBookForm";
import Gen from "./components/Gender/gender";

function App() {
  const gender = [
    {
      book: 'Suspense',
      corPrimaria: '#fa7f78',
      corSecundaria: '#ff362b'
    },
    {
      book: 'Terror',
      corPrimaria: '#fcdddc',
      corSecundaria: '#8a8a8a'
    },
    {
      book: 'Romance',
      corPrimaria: '#fcb6dd',
      corSecundaria: '#ff61b9'
    },
    {
      book: 'Fantasia',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      book: 'Policial',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      book: 'Infantil',
      corPrimaria: '#bdf5ff',
      corSecundaria: '#83fcec'
    },
    {
      book: 'Ficção',
      corPrimaria: '#c8abf7',
      corSecundaria: '#673cab'
    },
  ]

  const inicial = [
  ]

  const [bookShelfs, setBookShelfs] = useState(inicial)

  const handleDeleteBook = (bookShelf) => {
    const updatedBookShelfs = bookShelfs.filter((shelf) => shelf !== bookShelf);
    setBookShelfs(updatedBookShelfs);
  };

  return (
    <div >
      
      <AddForm gender={gender.map(gen => gen.book)} onBookAdd={bookShelf => setBookShelfs([...bookShelfs, bookShelf])} />
      {bookShelfs.length > 0 && (
      <section className={`gen`}>
        <h1>Estande de Livros</h1>
        {gender.map((gen, indication) => <Gen key={indication} gen={gen} bookShelfs={bookShelfs.filter(bookShelf => bookShelf.gen === gen.book)} onDeleteBook={handleDeleteBook}/>)}
      </section>
      )}
    </div>
  );
}

export default App;
