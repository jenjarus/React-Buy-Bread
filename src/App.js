import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import Header from "./Components/Header";
import InputProduct from "./Components/InputProduct";
import ListProducts from "./Components/ListProducts";
import InputEditProduct from "./Components/inputEditProduct";
import Footer from "./Components/Footer";

import './Styles/reset.css';
import './Styles/styles.scss';

const App = () => {
    const inputEdit = useSelector((store) => store.inputEdit);
    const idEdit = useSelector((store) => store.idEdit);
    const [viewEdit, setViewEdit] = useState(false);


    useEffect(() => {
        setViewEdit(inputEdit);
    }, [inputEdit, idEdit]);

    return (
        <div className="body">
            <Header/>
            {viewEdit ? <InputEditProduct/> : <InputProduct/>}
            <ListProducts/>
            <ListProducts filter={'done'}/>
            <Footer/>
        </div>
    );
};

export default App;
