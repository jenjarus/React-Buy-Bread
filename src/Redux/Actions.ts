// Добавление продукта в список
import {IDataItems, IDataProducts} from "../Types/Types";

export function setItem(data: IDataItems) {
    return {
        type: 'SET_ITEM',
        item: data,
    }
}

// Вызов изменения продукта из списка
export function setEdit(id: number, edit: boolean) {
    return {
        type: 'SET_EDIT',
        id: id,
        edit: edit,
    }
}

// Изменение продукта из списка
export function setEditItem(data: IDataItems) {
    return {
        type: 'SET_EDIT_ITEM',
        item: data,
    }
}

// Выполнение продукта из списка
export function setDoneItem(id: number) {
    return {
        type: 'SET_DONE_ITEM',
        id: id
    }
}

// Удаление продукта из списка
export function deleteItem(id: number) {
    return {
        type: 'DELETE_ITEM',
        id: id,
    }
}

// Добавление продукта в список сохраненных названий
export function setProductItem(data: IDataProducts) {
    return {
        type: 'SET_PRODUCT_ITEM',
        product: data,
    }
}

// Изменение продукта из списка сохраненных названий
export function setEditProductItem(id: number, data: IDataProducts) {
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
