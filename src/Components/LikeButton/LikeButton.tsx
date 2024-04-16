import React, { useEffect } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// eslint-disable-next-line
import * as favouritesActions from "../../features/favouritesCafes/favouritesCafesSlice";

export const LikeButton: React.FC = () => {
  const { favouritesCafes, loading, error } = useAppSelector(
    (state) => state.favourites
  );

  const { selectedCafe } = useAppSelector((state) => state.selectedCafe);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(favouritesActions.initFavourites());
  }, []);

  const like = () => {
    if (selectedCafe) {
      dispatch(favouritesActions.like(+selectedCafe?.id));
    }
  };

  return (
    <div className="cafe__buttons">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="button-wrap cafe__button-wrap">
          {/* eslint-disable-next-line */}
          <button
            className={classNames("button", {
              "button--like-filled":
                selectedCafe && favouritesCafes.includes(selectedCafe),
              "button--like":
                !selectedCafe || !favouritesCafes.includes(selectedCafe),
            })}
            id="likeButton"
            type="button"
            onClick={like}
          ></button>
          {error ? (
            <label htmlFor="likeButton">{error}</label>
          ) : (
            <label htmlFor="likeButton">Додати в улюблене</label>
          )}
        </div>
      )}

      <button className="search-bar__search cafe__menu" type="button">
        Меню
      </button>
    </div>
  );
};
