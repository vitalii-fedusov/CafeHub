import React from 'react';

import logo from '../../assets/icons/cafe-logo.svg';
import world from '../../assets/icons/world-icon.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <a href=".">
          <img src={logo} alt="CafeHub logo" />
        </a>

        <nav className="top-bar__nav">
          <ul className="top-bar__items">
            <li className="top-bar__item">
              <div>
                <img src={world} alt="icon world" />
                <span>UA</span>
                <img src={arrowDown} alt="arrow down" />
              </div>
            </li>

            <li>
              <button type="button">Вхід</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
