export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_ITEM':
            return {
                ...state,
                items: [...state.items, action.item],
            };
        case 'SET_EDIT':
            return {
                ...state,
                inputEdit: action.edit,
                idEdit: action.id,
            };
        case 'SET_EDIT_ITEM':
            return {
                ...state,
                items: [...state.items.map(item => {
                    if (item.id === action.id) {
                        item = action.item
                    }
                    return item;
                })]
            };
        case 'SET_DONE_ITEM':
            return {
                ...state,
                items: [...state.items.map(item => {
                    if (item.id === action.id) {
                        item.done = !item.done
                    }
                    return item;
                })]
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.id)],
                inputEdit: action.id === state.idEdit ? false : state.inputEdit,
                idEdit: action.id === state.idEdit ? 0 : state.idEdit,
            };
        case 'DELETE_DONE_ITEMS':
            return {
                ...state,
                items: [...state.items.filter(item => item.done !== true)],
            };
        case 'SET_THEME':
            return {
                ...state,
                themeDark: state.themeDark === true ? false : true,
            };
        default:
            return state;
    }
}
