import InputColorItem from './InputColorItem';

const InputColorList = ({set, color}) => {
    const colorNameItem = ['transparent', 'yellow', 'red', 'blue', 'green', 'orange'];
    const classColor = ' ' + color;

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
