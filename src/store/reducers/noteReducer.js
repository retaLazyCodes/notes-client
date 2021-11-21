
export function noteReducer(state = [], action) {
    console.log('ACTION_NOTE', action)
    switch (action.type) {
        case '@notes/init':
            return action.payload

        case '@notes/created':
            return [...state, action.payload]

        case '@notes/toggle_important':
            const { id } = action.payload
            return state.map(note => {
                if (note.id === id) {
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

const generateId = () => Math.floor(Math.random() * 99999) + 1

export const createNote = (content) => {
    return {
        type: '@notes/created',
        payload: {
            content,
            important: false,
            id: generateId()
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: '@notes/toggle_important',
        payload: {
            id
        }
    }
}

export const initNotes = (notes) => {
    return {
        type: '@notes/init',
        payload: notes
    }
}
