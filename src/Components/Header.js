import logo from "../Images/logo.png"
import {useDispatch} from "react-redux";
import {setTheme} from '../Redux/Actions';

const Header = () => {
    const dispatch = useDispatch();

    return (
      <header>
          <div className="container">
              <div className="logo">
                  <img src={logo} alt=""/>
              </div>
              <div className="title">Купи хлеб</div>
              <div className="theme-btn" onClick={() => dispatch(setTheme())}></div>
          </div>
      </header>
    );
};

export default Header;
