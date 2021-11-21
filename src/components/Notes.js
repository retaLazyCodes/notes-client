import { useSelector } from "react-redux";
import Note from "./Note";

function Notes() {
    const notes = useSelector(({ filter, notes }) => {
        if (filter === 'ALL') {
            return notes
        }
        return filter === 'IMPORTANT'
            ? notes.filter(note => note.important)
            : notes.filter(note => !note.important)
    })

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