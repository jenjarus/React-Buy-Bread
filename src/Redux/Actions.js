// Добавление продукта в список
export function setItem(data) {
    return {
        type: 'SET_ITEM',
        item: data,
    }
}

// Вызов изменения продукта из списка
export function setEdit(id, edit) {
    return {
        type: 'SET_EDIT',
        id: id,
        edit: edit,
    }
}

// Изменение продукта из списка
export function setEditItem(id, data) {
    return {
        type: 'SET_EDIT_ITEM',
        id: id,
        item: data,
    }
}

// Выполнение продукта из списка
export function setDoneItem(id) {
    return {
        type: 'SET_DONE_ITEM',
        id: id
    }
}

// Удаление продукта из списка
export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        id: id,
    }
}

// Добавление продукта в список сохраненных названий
export function setProductItem(data) {
    return {
        type: 'SET_PRODUCT_ITEM',
        product: data,
    }
}

// Изменение продукта из списка сохраненных названий
export function setEditProductItem(id, data) {
    return {
        type: 'SET_EDIT_PRODUCT_ITEM',
        id: id,
        product: data,
    }
}

// Удаление всех выполненых продуктов
export function deleteDoneItems() {
    return {
        type: 'DELETE_DONE_ITEMS',
    }
}

// Изменение темы
export function setTheme() {
    return {
        type: 'SET_THEME',
    }
}
