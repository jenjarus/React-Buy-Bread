import React from "react";
import {IInputNameProductItem} from "../../../Types/Types";

const InputNameProductItem: React.FC<IInputNameProductItem> = ({item, setProduct}) => {
    const classColor: string = ' ' + item.color;

    return (
        <div className={'item btn' + classColor}>
            <span className="text" onClick={() => setProduct(item.id)}>{item.name}</span>
        </div>)
};

export default InputNameProductItem;
