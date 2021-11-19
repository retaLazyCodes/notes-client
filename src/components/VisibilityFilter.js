import { useDispatch } from "react-redux"
import { getAll, getImportant, getNotImportant } from "../store/reducers/noteReducer"
import './VisibilityFilter.css'

function VisibilityFilter({ allNotes }) {

    const dispatch = useDispatch()

    const filterSelected = (value) => {
        if (value === 'ALL') {
            dispatch(getAll(allNotes))
        }

        if (value === 'IMPORTANT') {
            dispatch(getImportant(allNotes))
        }

        if (value === 'NOT_IMPORTANT') {
            dispatch(getNotImportant(allNotes))
        }
    }

    return (
        <div className="main">
            <div className="list-item">
                all
                <input type='radio' name='filter' onChange={() => filterSelected('ALL')} />
            </div>
            <div className="list-item">
                important
                <input type='radio' name='filter' onChange={() => filterSelected('IMPORTANT')} />
            </div>
            <div className="list-item">
                not important
                <input type='radio' name='filter' onChange={() => filterSelected('NOT_IMPORTANT')} />
            </div>
        </div>
    );
}

export default VisibilityFilter;