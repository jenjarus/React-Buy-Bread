import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import Header from "./Components/Header";
import InputProduct from "./Components/Input/InputProduct";
import ListProducts from "./Components/ListProducts/ListProducts";
import InputEditProduct from "./Components/Input/inputEditProduct";
import Footer from "./Components/Footer";

import './Styles/reset.css';
import './Styles/styles.scss';

const App = () => {
    const inputEdit = useSelector((store) => store.inputEdit);
    const idEdit = useSelector((store) => store.idEdit);
    const themeDark = useSelector((store) => store.themeDark);

    const [viewEdit, setViewEdit] = useState(false);

    const theme = themeDark === true ? ' theme-dark' : '';

    useEffect(() => {
        setViewEdit(inputEdit);
    }, [inputEdit, idEdit]);

    return (
        <div className={"body" + theme}>
            <Header/>
            {viewEdit ? <InputEditProduct/> : <InputProduct/>}
            <ListProducts/>
            <ListProducts filter={'done'}/>
            <Footer/>
        </div>
    );
};

export default App;
