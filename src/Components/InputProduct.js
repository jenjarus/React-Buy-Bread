import {useState} from "react";
import {useDispatch} from "react-redux";
import {setItem} from '../Redux/Actions';
import InputColorList from './InputColorList';

const InputProduct = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [color, setColor] = useState('transparent');

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

        if (input.trim()) {
            dispatch(setItem(newItem));
            setInput('');
            setColor('transparent');
        }
    };

    return (
        <div className="input-product">
            <div className="container">
                <div className="input-product-wrap">
                    <input type="text" className="input" placeholder="Введите название" value={input} onChange={e => setInput(e.target.value)}/>
                    <button onClick={addItem} className="btn">Добавить</button>
                    <InputColorList set={setColor} color={color}/>
                </div>
            </div>
        </div>
    )
};

export default InputProduct;
