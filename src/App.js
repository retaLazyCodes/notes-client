import './App.css';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>App de notas</h1>
        <NoteForm />
        <Notes />
      </header>
    </div>
  );
}

export default App;
