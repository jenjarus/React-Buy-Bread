import {initialState} from "./State";
import {IState, IAction} from "../Types/Types";

export default function reducer(state: IState = initialState, action: IAction) {
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
        case 'SET_PRODUCT_ITEM':
            return {
                ...state,
                products: [...state.products, action.product],
            };
        case 'SET_EDIT_PRODUCT_ITEM':
            return {
                ...state,
                products: [...state.products.map(item => {
                    if (item.id === action.id) {
                        item = action.product
                    }
                    return item;
                })]
            };
        case 'DELETE_DONE_ITEMS':
            return {
                ...state,
                items: [...state.items.filter(item => item.done !== true)],
            };
        case 'SET_THEME':
            return {
                ...state,
                themeDark: state.themeDark !== true,
            };
        default:
            return state;
    }
}
