import { useDispatch } from "react-redux"
import { createNote } from "../redux/reducers/noteReducer"

function NoteForm() {
    const dispatch = useDispatch()

    const handleAddNote = (e) => {
        e.preventDefault()
        const { target } = e
        const content = target.note.value
        target.note.value = ''
        dispatch(createNote(content))
    }

    return (
        <form onSubmit={handleAddNote}>
            <input name="note" />
            <button>add</button>
        </form>
    )
}

export default NoteForm