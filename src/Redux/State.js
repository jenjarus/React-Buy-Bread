import {createStore} from "redux";

import {loadState, saveState} from './localStorage';
import reducer from "./Reducer";

const initialState = {
    items: [
        {
            id: 1,
            done: false,
            show: true,
            color: 'yellow',
            text: 'Хлеб',
        },
        {
            id: 2,
            done: false,
            show: true,
            color: 'blue',
            text: 'Молоко',
        },
        {
            id: 3,
            done: false,
            show: true,
            color: 'red',
            text: 'Курица',
        }
    ],
    products: [
        {
            id: 1,
            name: 'Хлеб',
            color: 'yellow',
            count: 2,
        },
        {
            id: 2,
            name: 'Батон',
            color: 'yellow',
            count: 1,
        },
        {
            id: 3,
            name: 'Курица',
            color: 'red',
            count: 1,
        },
        {
            id: 4,
            name: 'Бекон',
            color: 'red',
            count: 1,
        },
        {
            id: 5,
            name: 'Гречка',
            color: 'orange',
            count: 1,
        },
        {
            id: 6,
            name: 'Яблоки',
            color: 'green',
            count: 1,
        },
        {
            id: 7,
            name: 'Кукуруза',
            color: 'orange',
            count: 1,
        },
    ],
    themeDark: false,
    inputEdit: false,
    idEdit: 0,
};

const items = loadState('items');
const products = loadState('products');
const theme = loadState('themeDark');
const state = Object.assign(initialState, items, products, theme);

const store = createStore(
    reducer,
    state
);

store.subscribe(() => {
    saveState('items', {
        items: store.getState().items,
    });
    saveState('products', {
        products: store.getState().products,
    });
    saveState('themeDark', {
        themeDark: store.getState().themeDark,
    });
});

export default store;
