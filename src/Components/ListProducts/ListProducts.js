import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {deleteDoneItems} from '../../Redux/Actions';

import ListProductsItem from "./ListProductsItem";

const ListProducts = ({filter}) => {
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items);
    let newItems, classDone, emptyItems = '', delDoneItems = '';

    // Флаг списка продуктов (выполнены продукты или нет)
    if (filter === 'done') {
        newItems = items.filter(item => item.done === true);
        classDone = ' list-products-bought'
    } else {
        newItems = items.filter(item => item.done === false);
        classDone = '';
    }

    if (filter !== 'done' && !newItems.length) emptyItems = <div className="empty-item">Список пуст</div>;
    if (filter === 'done' && newItems.length) delDoneItems = (
        <div className="bought-top">
            <div className="bought-count">Выполнено: {newItems.length}</div>
            <span className="link link-delete" onClick={() => dispatch(deleteDoneItems())}>Очистить список</span>
        </div>
    );

    return (
        <div className={'list-products' + classDone}>
            <div className="container">
                {delDoneItems}
                <div className="items">
                    {emptyItems}
                    {newItems.map((el) => <ListProductsItem key={el.id} item={el}/>)}
                </div>
            </div>
        </div>
    )
};

export default ListProducts;
