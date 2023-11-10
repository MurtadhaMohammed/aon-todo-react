import logo from "../../../assets/logo.svg";
import "./header.css";

const MainHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <img src={logo} />
          <ul>
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="./about.html">About</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
