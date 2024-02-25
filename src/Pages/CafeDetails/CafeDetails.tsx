import React from "react";
import { useNavigate } from "react-router-dom";
import TextRating from "../../Components/Stars/Stars";
import mapPin from "../../assets/icons/tabler-icon-map-pin.svg";

export const CafeDetails: React.FC = () => {
  const navigate = useNavigate();

  const cafe = {
    id: 1,
    name: "First Point",
    address: "вул. Ярославська 14/20",
    languages: [
      {
        id: 1,
        name: "Ukrainian",
      },
      {
        id: 2,
        name: "English",
      },
    ],
    openFromWeekdays: "08:00:00",
    closeAtWeekdays: "21:00:00",
    openFromWeekends: "09:00:00",
    closeAtWeekends: "21:00:00",
    score: 0,
    urlToGoogleMaps:
    // eslint-disable-next-line
      "https://www.google.com/maps/place/First+Point+Espresso+Bar/@50.4676746,30.5109534,18.61z/data=!4m6!3m5!1s0x40d4ce14b4b0191f:0x7e2440f43a54e2d4!8m2!3d50.467646!4d30.5116746!16s%2Fg%2F11b8vd6nb1?entry=ttu",
    urlOfImage: "https://i.imgur.com/iPMWW5y.jpg",
    comments: [],
    webSite: "https://www.instagram.com/firstpointcoffee/?igshid=8x1kpl73le8q",
    coworking: false,
    vegan: false,
    petFriendly: true,
    averageBill: 53,
    images: [],
    cuisines: [
      {
        id: 6,
        name: "Pastries and coffee",
      },
      {
        id: 8,
        name: "Fast food",
      },
    ],
    fastService: true,
    wifi: false,
    businessLunch: false,
    freeWater: true,
    boardGames: false,
    birthday: false,
    businessMeeting: false,
    childHoliday: false,
    romantic: false,
    thematicEvent: false,
    familyHoliday: false,
    parking: true,
    terrace: true,
    description:
    // eslint-disable-next-line
      "Затишна кав’ярня на Подолі, тут можна випити кави або купити її собі додому у зернах. Також є сніданки, випічка та солодощі. Можна приходити із домашніми тваринами. Цікаво, що перша концепція закладу – місце, звідки починається ваша подорож. Ми думаємо, що це дуже круто – випити каву перед довгою дорогою у хорошій компанії або ж зібратись на каву з друзями та разом придумати чергову круту мандрівку!",
  };

  const {
    name,
    address,
    // languages,
    // openFromWeekdays,
    closeAtWeekdays,
    openFromWeekdays,
    // closeAtWeekends,
    // score,
    urlToGoogleMaps,
    urlOfImage,
    // comments,
    webSite,
    // images,
    averageBill,
  } = cafe;
    

  function getValidTime(time: string) {
    return time.slice(0, -3);
  }

  const weekdaysHours = `${getValidTime(openFromWeekdays)}-${getValidTime(closeAtWeekdays)} `;

  return (
    <>
      <div className="breadCrumps">
        {/* eslint-disable-next-line */}
        <button
          className="button"
          id="backButton"
          type="button"
          onClick={() => navigate(-1)}
        ></button>
        <label htmlFor="backButton">Назад</label>
      </div>

      <div className="cafe">
        <a
          href={webSite}
          target="blank"
          className="card__link"
          // onClick={() => dispatch(setCafe(card))}
        >
          <img className="card__image" src={urlOfImage} alt={name} />
        </a>

        <ul className="card__list">
          <li className="card__item">
            <h3 className="card__name">
              <strong>{name}</strong>
            </h3>
          </li>

          <li className="card__item">
            <a href={urlToGoogleMaps} className="card__link" target="blank">
              <img src={mapPin} alt="mapPinIcon" />
              <p className="card__paragraph card__paragraph--address">
                {address}
              </p>
            </a>
          </li>

          <li className="card__item">
            <p className="card__paragraph card__paragraph--hours">
              {`Графік роботи: ${weekdaysHours}`}
            </p>
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
    </>
  );
};
