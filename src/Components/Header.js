import logo from "../Images/logo.png"

const Header = () => {
    return (
      <header>
          <div className="container">
              <div className="logo">
                  <img src={logo} alt=""/>
              </div>
              <div className="title">Купи хлеб</div>
          </div>
      </header>
    );
};

export default Header;
