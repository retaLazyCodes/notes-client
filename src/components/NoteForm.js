import { useDispatch } from "react-redux"
import { createNote } from "../store/reducers/noteReducer"
import notesService from '../services/notes'

function NoteForm() {
    const dispatch = useDispatch()

    const addNote = (e) => {
        e.preventDefault()
        const { target } = e
        const content = target.note.value

        const noteObject = {
            content,
            important: false
        }
        target.note.value = ''
        notesService
            .create(noteObject)
            .then(returnedNote => {
                if (returnedNote.content) {
                    dispatch(createNote(content))
                }
            })
    }

    return (
        <form onSubmit={addNote}>
            <input name="note" />
            <button>add</button>
        </form>
    )
}

export default NoteForm