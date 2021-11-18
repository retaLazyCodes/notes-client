import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()

  const handleAddNote = (e) => {
    e.preventDefault()
    const { target } = e
    const content = target.note.value
    target.note.value = ''
    dispatch({
      type: '@notes/created',
      payload: {
        content,
        important: false,
        id: 1
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleAddNote}>
          <input name="note" />
          <button>add</button>
        </form>
        <ul>
          {
            notes.map(note => {
              return <li key={note.id}>
                {note.content}
                <strong>
                  {
                    note.important
                      ? ' important'
                      : ' not important'
                  }
                </strong>
              </li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
