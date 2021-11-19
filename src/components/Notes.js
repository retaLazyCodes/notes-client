import { useSelector } from "react-redux";
import Note from "./Note";

function Notes() {
    const notes = useSelector(state => state.notes)

    return (
        <ul style={{ listStyle: 'none' }}>
            {
                notes.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                    />)
            }
        </ul>
    )
}

export default Notes