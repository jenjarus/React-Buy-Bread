import {useSelector} from "react-redux";
import InputNameProductItem from './InputNameProductItem'

const InputNameProductList = ({input, setProduct}) => {
    const products = useSelector((store) => store.products);

    // Сортировка по убыванию количества вызовов продукта
    const sortCount = (prev, next) => next.count - prev.count;

    // Сначала вывод сохраненных продуктов которые начинаются на input...
    let newArr = products.filter((a) => a.name.startsWith(input)).sort(sortCount);
    // Потом которые имеют в теле input
    newArr.push(...products.filter((a) => a.name.includes(input) && !a.name.startsWith(input)).sort(sortCount));
    // Не выводить если input пустой
    newArr = !input ? [] : newArr;

    return (
        <div className="input-product-list">
            {newArr.slice(0, 10).map((el) => <InputNameProductItem key={el.id} item={el} setProduct={setProduct}/>)}
        </div>
    )
};

export default InputNameProductList;
