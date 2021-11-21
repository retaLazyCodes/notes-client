import { useDispatch } from "react-redux"
import { filterChange } from "../store/reducers/filterReducer"
import './VisibilityFilter.css'

function VisibilityFilter() {

    const dispatch = useDispatch()

    return (
        <div className="radio">
            <div className="radio-item">
                all
                <input type='radio' name='filter' onChange={() => dispatch(filterChange('ALL'))} />
            </div>
            <div className="radio-item">
                important
                <input type='radio' name='filter' onChange={() => dispatch(filterChange('IMPORTANT'))} />
            </div>
            <div className="radio-item">
                not important
                <input type='radio' name='filter' onChange={() => dispatch(filterChange('NOT_IMPORTANT'))} />
            </div>
        </div>
    );
}

export default VisibilityFilter;