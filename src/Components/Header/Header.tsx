import React from 'react';

import logo from '../../assets/icons/cafe-logo.svg';
import world from '../../assets/icons/world-icon.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

export const Header: React.FC = () => {
  return (
    <header className="header page__header">
      <div className="top-bar header__top-bar">
        <a href=".">
          <img src={logo} alt="CafeHub logo" />
        </a>

        <nav className="top-bar__nav">
          <ul className="top-bar__items">
            <li className="top-bar__item">
              <img className="top-bar__icon" src={arrowDown} alt="arrow down" />
              <span className="top-bar__icon">UA</span>
              <img className="top-bar__icon" src={world} alt="icon world" />
            </li>

            <li className="top-bar__item">
              <button className="top-bar__button" type="button">Вхід</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__search-bar search-bar">
        <ul className="search-bar__list">
          <li className="search-bar__item search-bar__item--city">
            <button className="search-bar__city" type="button">
              <img src={arrowDown} alt="arrow down" />
              Київ
            </button>
          </li>

          <li className="search-bar__item search-bar__item--input">
            <input
              className="search-bar__input"
              type="text"
              placeholder="Обери найкраще місце для свого відпочинку"
            />
          </li>

          <li className="search-bar__item search-bar__item--search">
            <button className="search-bar__search" type="button">Пошук</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
