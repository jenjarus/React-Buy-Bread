import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEditProductItem, setItem, setProductItem} from '../../Redux/Actions';

import InputColorList from './Color/InputColorList';
import InputNameProductList from './NameProduct/InputNameProductList';

const InputProduct = () => {
    const dispatch = useDispatch();

    const products = useSelector((store) => store.products); // Список сохраненных названий продуктов

    const [input, setInput] = useState('');
    const [color, setColor] = useState('transparent');

    const inputRef = useRef();

    const addItem = () => {
        let newText = input.replace(/\s+/g, ' ');
        newText = newText.trim();

        const newItem = {
            id: new Date().getTime(),
            done: false,
            show: true,
            color: color,
            text: newText,
        };

        const newProduct = {
            id: new Date().getTime(),
            count: 1,
            color: color,
            name: newText,
        };

        if (input.trim()) {
            dispatch(setItem(newItem));
            compareInputProduct() ? dispatch(setEditProductItem(idEditProduct(), editProduct(newText))) : dispatch(setProductItem(newProduct));
            setInput('');
            setColor('transparent');
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
                    <input type="text" className="input" placeholder="Введите название" ref={inputRef} value={input}
                           onChange={e => setInput(e.target.value)} onKeyDown={clickEnter}/>
                    <button onClick={addItem} className="btn">Добавить</button>
                    <InputColorList set={setColor} color={color}/>
                </div>
                <InputNameProductList input={input} setProduct={setProduct}/>
            </div>
        </div>
    )
};

export default InputProduct;
