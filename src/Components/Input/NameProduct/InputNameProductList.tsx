import React from "react";
import {useSelector} from "react-redux";
import {IState, IDataProducts, IInputNameProductList} from "../../../Types/Types";

import InputNameProductItem from './InputNameProductItem'

const InputNameProductList: React.FC<IInputNameProductList> = ({input, setProduct}) => {
    const products: IDataProducts[] = useSelector((store: IState) => store.products);

    // Сортировка по убыванию количества вызовов продукта
    const sortCount = (prev: IDataProducts, next: IDataProducts): number => next.count - prev.count;

    // Сначала вывод сохраненных продуктов которые начинаются на input...
    let newArr: IDataProducts[] = products.filter((a) => a.name.startsWith(input)).sort(sortCount);
    // Потом которые имеют в теле input
    newArr.push(...products.filter((a) => a.name.includes(input) && !a.name.startsWith(input)).sort(sortCount));
    // Не выводить если input пустой
    newArr = !input ? [] : newArr;

    return (
        <div className="input-product-list">
            {newArr.slice(0, 10).map((el) => <InputNameProductItem key={el.id} item={el} setProduct={setProduct}/>)}
        </div>
    )
};

export default InputNameProductList;
