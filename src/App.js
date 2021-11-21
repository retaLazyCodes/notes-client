import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
import Notification from './components/Notification'
import notesService from './services/notes';
import { initNotes } from './store/reducers/noteReducer';


function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    notesService.getAll().then(notes => {
      dispatch(initNotes(notes))
    })
  }, [dispatch])

  const handleLogout = () => {
    setUser(null)
    notesService.setToken(null)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
        <Notification message={errorMessage} />

        {
          user
            ? <NoteForm
              handleLogout={handleLogout}
            />
            : <LoginForm
              setError={setErrorMessage}
              setUser={setUser}
            />
        }
        <VisibilityFilter />
        <Notes />
      </header>
    </div>
  );
}

export default App;
