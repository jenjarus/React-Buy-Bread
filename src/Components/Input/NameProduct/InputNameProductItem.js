const InputNameProductItem = ({item, setProduct}) => {
    const classColor = ' ' + item.color;

    return (
        <div className={'item btn' + classColor}>
            <span className="text" onClick={() => setProduct(item.id)}>{item.name}</span>
        </div>)
};

export default InputNameProductItem;
