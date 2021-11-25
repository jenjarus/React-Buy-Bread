import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEdit, setEditItem} from '../Redux/Actions';
import InputColorList from './InputColorList';

const InputEditProduct = () => {
    const dispatch = useDispatch();
    const id = useSelector((store) => store.idEdit); // id изменяемого объекта
    const items = useSelector((store) => store.items);
    const editItem = items.find(item => item.id === id); // изменяемый объект
    const [input, setInput] = useState('');
    const [color, setColor] = useState('');

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

            dispatch(setEditItem(editItem));
            dispatch(setEdit(0, false));
        } else {
            dispatch(setEdit(0, false));
        }
    };

    return (
        <div className="input-product">
            <div className="container">
                <div className="input-product-wrap">
                    <input type="text" className="input" value={input} onChange={e => setInput(e.target.value)}/>
                    <button className="btn" onClick={addItem}>Изменить</button>
                    <InputColorList set={setColor} color={color}/>
                    <span className="icon icon-close" onClick={() => dispatch(setEdit(0, false))}></span>
                </div>
            </div>
        </div>
    )
};

export default InputEditProduct;
