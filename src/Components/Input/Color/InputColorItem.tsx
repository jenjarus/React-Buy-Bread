import React from "react";
import {IInputColorItem} from "../../../Types/Types";

const InputColorItem: React.FC<IInputColorItem> = ({name, set, active}) => {
    let classActive: string = '';

    if (active === name) { classActive = ' active'; }

    return (
        <div className={'color-item ' + name + classActive} onClick={() => set(name)}></div>
    )
};

export default InputColorItem;
