import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEdit, setEditItem, setEditProductItem, setProductItem} from '../../Redux/Actions';

import InputColorList from './Color/InputColorList';
import InputNameProductList from "./NameProduct/InputNameProductList";

const InputEditProduct = () => {
    const dispatch = useDispatch();

    const id = useSelector((store) => store.idEdit); // id изменяемого объекта
    const items = useSelector((store) => store.items);
    const products = useSelector((store) => store.products); // Список сохраненных названий продуктов
    const editItem = items.find(item => item.id === id); // изменяемый объект

    const [input, setInput] = useState('');
    const [color, setColor] = useState('');

    const inputRef = useRef();

    useEffect(() => {
        if (editItem) {
            setInput(editItem.text);
            setColor(editItem.color)
        }
    }, [editItem]);

    const addItem = () => {
        if (input.trim()) {
            let newText = input.replace(/\s+/g, ' ');
            newText = newText.trim();

            editItem.text = newText;
            editItem.color = color;

            const newProduct = {
                id: new Date().getTime(),
                count: 1,
                color: color,
                name: newText,
            };

            dispatch(setEditItem(editItem));
            dispatch(setEdit(0, false));
            compareInputProduct() ? dispatch(setEditProductItem(idEditProduct(), editProduct(newText))) : dispatch(setProductItem(newProduct));
        } else {
            dispatch(setEdit(0, false));
        }
    };

    const clickEnter = (e) => {
        if (e.keyCode === 13) {
            addItem();
        }
    };

    // Вставка сохраненного названия продукта
    const setProduct = (id) => {
        const product = products.find(el => el.id === id);
        setInput(product.name);
        setColor(product.color);
        inputRef.current.focus();
    };

    // Проверка на наличие сохраненного названия продукта
    const compareInputProduct = () => {
        const product = products.filter((a) => a.name === input);
        return product.length !== 0;
    };

    // id сохраненного названия продукта
    const idEditProduct = () => {
        const product = products.filter((a) => a.name === input);
        return product[0].id;
    };

    // Изменение объекта сохраненного названия продукта
    const editProduct = (text) => {
        const product = products.find((a) => a.name === input);
        return {
            id: product.id,
            count: ++product.count,
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
