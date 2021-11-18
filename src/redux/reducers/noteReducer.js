
export function noteReducer(state = [], action) {
    switch (action.type) {
        case '@notes/created':
            return state.concat(action.payload)
        case '@notes/toggle_importance':
            const { id } = action.payload
            return state.map(note => {
                if (note.id == id) {
                    return {
                        ...note,
                        important: !note.important
                    }
                }
                return note
            })
        default:
            return state
    }
}
