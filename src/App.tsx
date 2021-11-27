import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {IState} from "./Types/Types";

import Header from "./Components/Header";
import InputProduct from "./Components/Input/InputProduct";
import ListProducts from "./Components/ListProducts/ListProducts";
import InputEditProduct from "./Components/Input/inputEditProduct";
import Footer from "./Components/Footer";

import './Styles/reset.css';
import './Styles/styles.scss';

const App = () => {
    const inputEdit: boolean = useSelector((store: IState) => store.inputEdit);
    const idEdit: number = useSelector((store: IState) => store.idEdit);
    const themeDark: boolean = useSelector((store: IState) => store.themeDark);

    const [viewEdit, setViewEdit] = useState(false);

    const theme: string = themeDark ? ' theme-dark' : '';

    useEffect(() => {
        setViewEdit(inputEdit);
    }, [inputEdit, idEdit]);

    return (
        <div className={"body" + theme}>
            <Header/>
            {viewEdit ? <InputEditProduct/> : <InputProduct/>}
            <ListProducts filter={'none'}/>
            <ListProducts filter={'done'}/>
            <Footer/>
        </div>
    );
};

export default App;
