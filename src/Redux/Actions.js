export function setItem(data) {
    return {
        type: 'SET_ITEM',
        item: data,
    }
}

export function setEdit(id, edit) {
    return {
        type: 'SET_EDIT',
        id: id,
        edit: edit,
    }
}

export function setEditItem(id, data) {
    return {
        type: 'SET_EDIT_ITEM',
        id: id,
        item: data,
    }
}

export function setDoneItem(id) {
    return {
        type: 'SET_DONE_ITEM',
        id: id
    }
}

export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        id: id,
    }
}
