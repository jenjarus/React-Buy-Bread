import React from "react";
import {useDispatch} from "react-redux";
import {deleteItem, setDoneItem, setEdit} from '../../Redux/Actions';

const ListProductsItem = ({item}) => {
    const dispatch = useDispatch();
    const classColor = ' ' + item.color;

    return (
        <div className="item">
            <span className={'color' + classColor}></span>
            <span className="text" onClick={() => dispatch(setDoneItem(item.id))}>{item.text}</span>
            <span className="icon icon-edit" onClick={() => dispatch(setEdit(item.id, true))}></span>
            <span className="icon icon-delete" onClick={() => dispatch(deleteItem(item.id))}></span>
        </div>)
};

export default ListProductsItem;
