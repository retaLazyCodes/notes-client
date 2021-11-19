import { useDispatch } from "react-redux"
import { toggleImportanceOf } from "../redux/reducers/noteReducer"

function Note({ note }) {
    const dispatch = useDispatch()

    const handleToggleImportant = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    return (
        <li
            onClick={() => handleToggleImportant(note.id)}
            style={{ cursor: 'pointer' }}
        >
            {note.content}
            <strong>
                {
                    note.important
                        ? ' important'
                        : ' not important'
                }
            </strong>
        </li>
    )
}

export default Note