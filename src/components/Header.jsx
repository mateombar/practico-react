import React from "react";
import "../assets/styles/components/Header.scss";

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  let text_account = "Account";
  let text_logout = "Logout";
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="user-icon" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">{text_account}</a>
          </li>
          <li>
            <a href="/">{text_logout}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
