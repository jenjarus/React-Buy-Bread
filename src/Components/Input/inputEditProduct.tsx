import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEdit, setEditItem, setEditProductItem, setProductItem} from '../../Redux/Actions';

import InputColorList from './Color/InputColorList';
import InputNameProductList from "./NameProduct/InputNameProductList";
import {IState, IDataItems, IDataProducts} from "../../Types/Types";

const InputEditProduct = () => {
    const dispatch = useDispatch();

    const id: number = useSelector((store: IState) => store.idEdit); // id изменяемого объекта
    const items: IDataItems[] = useSelector((store: IState) => store.items);
    const products: IDataProducts[] = useSelector((store: IState) => store.products); // Список сохраненных названий продуктов
    const editItem = items.find(item => item.id === id); // изменяемый объект

    const [input, setInput] = useState('');
    const [color, setColor] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editItem) {
            setInput(editItem.text);
            setColor(editItem.color)
        }
    }, [editItem]);

    const addItem = (): void => {
        if (input.trim()) {
            let newText: string = input.replace(/\s+/g, ' ');
            newText = newText.trim();

            editItem!.text = newText;
            editItem!.color = color;

            const newProduct: IDataProducts = {
                id: new Date().getTime(),
                count: 1,
                color: color,
                name: newText,
            };

            dispatch(setEditItem(idEditProduct(), editItem!));
            dispatch(setEdit(0, false));
            compareInputProduct() ? dispatch(setEditProductItem(idEditProduct(), editProduct(newText))) : dispatch(setProductItem(newProduct));
        } else {
            dispatch(setEdit(0, false));
        }
    };

    const clickEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.code === 'Enter') {
            addItem();
        }
    };

    // Вставка сохраненного названия продукта
    const setProduct = (id: number): void => {
        const product = products.find(el => el.id === id);
        setInput(product!.name);
        setColor(product!.color);
        if(inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Проверка на наличие сохраненного названия продукта
    const compareInputProduct = (): boolean => {
        const product = products.filter((a) => a.name === input);
        return product.length !== 0;
    };

    // id сохраненного названия продукта
    const idEditProduct = (): number => {
        const product = products.filter((a) => a.name === input);
        return product[0].id;
    };

    // Изменение объекта сохраненного названия продукта
    const editProduct = (text: string): IDataProducts => {
        const product = products.find((a) => a.name === input);
        return {
            id: product!.id,
            count: ++product!.count,
            color: color,
            name: text,
        };
    };

    return (
        <div className="input-product">
            <div className="container">
                <div className="input-product-wrap">
                    <input type="text" className="input" ref={inputRef} value={input}
                           onChange={e => setInput(e.target.value)}
                           onKeyDown={clickEnter}/>
                    <button className="btn" onClick={addItem}>Изменить</button>
                    <InputColorList set={setColor} color={color}/>
                    <span className="icon icon-close" onClick={() => dispatch(setEdit(0, false))}></span>
                </div>
                <InputNameProductList input={input} setProduct={setProduct}/>
            </div>
        </div>
    )
};

export default InputEditProduct;
