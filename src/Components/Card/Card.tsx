import React from 'react';
import { Cafe } from '../../Types/Cafe';
import mapPin from '../../assets/icons/tabler-icon-map-pin.svg';
import clock from '../../assets/icons/tabler-icon-clock-hour-10.svg';

type Props = {
  card: Cafe,
};

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className="card">
      <a href="." className="card__image">
        <img
          src="./images/cafe-first-point.png"
          alt={card.name}
        />
      </a>

      <ul className="card__list">
        <li className="card__item">
          <h1 className="card__name">{card.name}</h1>
        </li>

        <li className="card__item">
          <a href="." className="card__link">
            <img src={mapPin} alt="mapPinIcon" />
            <p>{card.address}</p>
          </a>
        </li>

        <li className="card__item">
          <a href=".">
            <img src={clock} alt="clockIcon" />
            <p>{card.schedule}</p>
          </a>
        </li>

        <li className="card__item">Stars</li>

        <li className="card__item">
          <p>{`Середній чек: $${card.averageBill}`}</p>
        </li>
      </ul>
    </div>
  );
};
