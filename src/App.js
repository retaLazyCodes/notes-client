import './App.css';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';


function App() {

  const filterSelected = (value) => {
    console.log(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>App de notas</h1>
        <NoteForm />
        <Notes />
        <div>
          all
          <input type='radio' name='filter' onChange={() => filterSelected('ALL')} />

          important
          <input type='radio' name='filter' onChange={() => filterSelected('IMPORTANT')} />

          noimportant
          <input type='radio' name='filter' onChange={() => filterSelected('NOT_IMPORTANT')} />
        </div>
      </header>
    </div>
  );
}

export default App;
