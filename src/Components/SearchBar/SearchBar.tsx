import React from "react";
import { useSearchParams } from "react-router-dom";
import arrowDown from "../../assets/icons/arrow-down.svg";

export const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev.toString());

      newParams.set("name", event.target.value);

      return newParams;
    });
  };

  return (
    <div className="search-bar main__search-bar">
      <ul className="search-bar__list">
        <li className="search-bar__item search-bar__item--city">
          <button className="search-bar__city city-button" type="button">
            <img
              className="search-bar__arrow-down"
              src={arrowDown}
              alt="arrow down"
            />
            <h3 className="city-button__name">Київ</h3>
          </button>
        </li>

        <li className="search-bar__item search-bar__item--input">
          <label htmlFor="main-input" className="search-bar__label">
            <input
              value={searchParams.get("name") || ""}
              onChange={(e) => handleInputChange(e)}
              id="main-input"
              className="search-bar__input"
              type="text"
              placeholder="Обери найкраще місце для свого відпочинку"
            />
          </label>
        </li>

        <li className="search-bar__item search-bar__item--search">
          <button className="search-bar__search" type="button">
            Пошук
          </button>
        </li>
      </ul>
    </div>
  );
};
