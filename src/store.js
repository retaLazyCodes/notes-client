import { createStore } from "redux";
import { noteReducer } from "./redux/reducers/noteReducer";

const store = createStore(
    noteReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store