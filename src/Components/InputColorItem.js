const InputColorItem = ({name, set, active}) => {
    let classActive = '';
    if (active === name) {
        classActive = ' active';
    }

    return (
        <div className={'color-item ' + name + classActive} onClick={() => set(name)}></div>
    )
};

export default InputColorItem;
