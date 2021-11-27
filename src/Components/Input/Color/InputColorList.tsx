import React from "react";
import InputColorItem from './InputColorItem';
import {IInputColorList} from "../../../Types/Types";

const InputColorList: React.FC<IInputColorList> = ({set, color}) => {
    const colorNameItem: string[] = ['transparent', 'yellow', 'red', 'blue', 'green', 'orange'];
    const classColor: string = ' ' + color;

    return (
        <div className={'color-box'}>
            <div className={'color-btn' + classColor}></div>
            <div className="color-dropdown">
                {colorNameItem.map((el, i) => <InputColorItem key={i} name={el} set={set} active={color}/>)}
            </div>
        </div>
    )
};

export default InputColorList;
