import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
import notesService from './services/notes';
import { initNotes } from './store/reducers/noteReducer';


function App() {
  const [allNotes, setAllNotes] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    notesService.getAll().then(notes => {
      setAllNotes(notes)
      dispatch(initNotes(notes))
    })
  }, [dispatch])


  return (
    <div className="App">
      <header className="App-header">
        <h1>App de notas</h1>
        <NoteForm />
        <VisibilityFilter allNotes={allNotes} />
        <Notes />
      </header>
    </div>
  );
}

export default App;
