import {loadState, saveState} from './localStorage';
import {createStore} from "redux";
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
    themeDark: false,
    inputEdit: false,
    idEdit: 0,
};

const items = loadState('items');
const theme = loadState('themeDark');
const state = Object.assign(initialState, items, theme);

const store = createStore(
    reducer,
    state
);

store.subscribe(() => {
    saveState('items',{
        items: store.getState().items,
    });
    saveState('themeDark',{
        themeDark: store.getState().themeDark,
    });
});

export default store;
