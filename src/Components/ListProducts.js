import React from "react";
import {useSelector} from "react-redux";
import ListProductsItem from "./ListProductsItem"

const ListProducts = ({filter}) => {
    const items = useSelector((store) => store.items);
    let newItems, classDone, emptyItems = '';

    if(filter === 'done') {
        newItems = items.filter(item => item.done === true);
        classDone = ' list-products-bought'
    } else {
        newItems = items.filter(item => item.done === false);
        classDone = '';
    }

    if(filter !== 'done' && !newItems.length) emptyItems = <div className="empty-item">Список пуст</div>;

    return (
        <div className={'list-products' + classDone}>
            <div className="container">
                <div className="items">
                    {emptyItems}
                    {newItems.map((el) => <ListProductsItem key={el.id} item={el}/>)}
                </div>
            </div>
        </div>
    )
};

export default ListProducts;