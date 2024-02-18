import React from 'react';
import { Cafe } from '../../Types/Cafe';
import mapPin from '../../assets/icons/tabler-icon-map-pin.svg';
import clock from '../../assets/icons/tabler-icon-clock-hour-10.svg';
import TextRating from '../Stars/Stars';

type Props = {
  card: Cafe,
};

export const Card: React.FC<Props> = ({ card }) => {
  const {
    name,
    address,
    urlAddress,
    schedule,
    averageBill,
  } = card;

  return (
    <div className="card">
      <a href=".">
        <img
          className="card__image"
          src="./images/cafe-first-point.png"
          alt={name}
        />
      </a>

      <ul className="card__list">
        <li className="card__item">
          <h3 className="card__name">
            <strong>{card.name}</strong>
          </h3>
        </li>

        <li className="card__item">
          <a href={urlAddress} className="card__link" target="blank">
            <img src={mapPin} alt="mapPinIcon" />
            <p className="card__paragraph">{address}</p>
          </a>
        </li>

        <li className="card__item">
          <img src={clock} alt="clockIcon" />
          <p className="card__paragraph">{schedule}</p>
        </li>

        <li className="card__item">
          <TextRating />
          <div>(8 відгуків)</div>
        </li>

        <li className="card__item">
          <p className="card__paragraph">{`Середній чек: $${averageBill}`}</p>
        </li>
      </ul>
    </div>
  );
};
