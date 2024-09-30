/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// eslint-disable-next-line
import * as favouritesActions from "../../features/favouritesCafes/favouritesCafesSlice";
import { ModalLoginWindow } from "../ModalLoginWindow/ModalLoginWindow";

export const LikeButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { favouritesCafes, loading, error } = useAppSelector(
    (state) => state.favourites
  );
  const { user } = useAppSelector((state) => state.auth);
  const { selectedCafe } = useAppSelector((state) => state.selectedCafe);
  const dispatch = useAppDispatch();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!favouritesCafes.length) {
      setIsLiked(false);

      return;
    }

    if (
      favouritesCafes.length && selectedCafe && Array.isArray(favouritesCafes)
        ? favouritesCafes.find((cafe) => cafe.id === selectedCafe.id)
        : false
    ) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [favouritesCafes, selectedCafe]);

  useEffect(() => {
    if (user) {
      dispatch(favouritesActions.initFavourites());
    }
  }, []);

  const like = () => {
    if (user && selectedCafe) {
      dispatch(favouritesActions.like(+selectedCafe?.id));
    }
  };

  const dislike = () => {
    if (user && selectedCafe) {
      dispatch(favouritesActions.dislike(+selectedCafe.id));
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
              "button--like-filled": isLiked,
              "button--like": !isLiked,
            })}
            id="likeButton"
            type="button"
            onClick={() => {
              if (!user) {
                handleOpen();
              }

              if (isLiked) {
                dislike();
              } else {
                like();
              }
            }}
          ></button>
          <ModalLoginWindow open={open} handleClose={handleClose} />
          {error ? (
            <label htmlFor="likeButton">{error}</label>
          ) : (
            <label htmlFor="likeButton">
              {isLiked ? "Видалити з улюбленого" : "Додати в улюблене"}
            </label>
          )}
        </div>
      )}

      <button className="search-bar__search cafe__menu" type="button">
        Меню
      </button>
    </div>
  );
};
