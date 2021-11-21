import { combineReducers, createStore } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { noteReducer } from "./reducers/noteReducer";
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

export const store = createStore(
    reducer,
    composeWithDevTools()
)


