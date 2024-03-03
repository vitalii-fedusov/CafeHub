import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Rating, StyledEngineProvider, Tab, Tabs } from "@mui/material";
import classNames from "classnames";
import mapPin from "../../assets/icons/tabler-icon-map-pin.svg";
// eslint-disable-next-line
import { CafeDescription } from "../../Components/CafeDescription/CafeDescription";
import { CardSwiper } from "../../Components/CardSwiper/CardSwiper";
import { CafeImages } from "../../Components/CafeImages/CafeImages";
// eslint-disable-next-line
import { CafeTestimonials } from "../../Components/CafeTestimonials/CafeTestimonials";

enum CafeInfoSections {
  DESCRIPTION = "Опис",
  PHOTO = "Фото",
  TESTIMONIALS = "Відгуки",
}

export const CafeDetails: React.FC = () => {
  const cafeInfoSections = [
    CafeInfoSections.DESCRIPTION,
    CafeInfoSections.PHOTO,
    CafeInfoSections.TESTIMONIALS,
  ];

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const cafeInfoSection = searchParams.get('section')
    || CafeInfoSections.DESCRIPTION;

  const handleSectionChange = (newSection: CafeInfoSections) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev.toString());

      newParams.set("section", newSection.toString());

      return newParams;
    });
  };

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
    // description,
  } = cafe;

  function getValidTime(time: string) {
    return time.slice(0, -3);
  }

  const weekdaysHours = `${getValidTime(openFromWeekdays)}-${getValidTime(closeAtWeekdays)} `;

  return (
    <>
      <div className="button-wrap">
        {/* eslint-disable-next-line */}
        <button
          className="button"
          id="backButton"
          type="button"
          onClick={() => navigate('/home')}
        ></button>
        <label htmlFor="backButton">Назад</label>
      </div>

      <div className="cafe main__cafe">
        <a
          href={webSite}
          target="blank"
          className="cafe__main-link"
          // onClick={() => dispatch(setCafe(card))}
        >
          <img className="cafe__image" src={urlOfImage} alt={name} />
        </a>

        <ul className="cafe__list">
          <li className="cafe__item">
            <h3 className="cafe__name">
              <strong>{name}</strong>
            </h3>
          </li>

          <li className="cafe__item">
            <a href={urlToGoogleMaps} className="cafe__link" target="blank">
              <img src={mapPin} alt="mapPinIcon" />
              <p className="cafe__paragraph cafe__paragraph--address">
                {address}
              </p>
              <p className="cafe__paragraph cafe__paragraph--address-show">
                показати на мапі
              </p>
            </a>
          </li>

          <li className="cafe__item">
            <p className="cafe__paragraph cafe__paragraph--hours">
              {`Графік роботи: пн-пт: ${weekdaysHours}, сб-нд: ${weekdaysHours}`}
            </p>
          </li>

          <li className="cafe__item cafe__item--tel">
            <p className="cafe__paragraph">Номер телефону:&nbsp;</p>
            <a className="cafe__paragraph" href="tel:0994029052">
              0994029052
            </a>
          </li>

          <li className="cafe__item">
            <p className="cafe__paragraph">{`Середній чек: $${averageBill}`}</p>
          </li>

          <li className="cafe__item">
            <p className="cafe__paragraph">Мова: Ukrainian/English</p>
          </li>

          <li className="cafe__item cafe__rating">
            <Rating value={4.5} readOnly precision={0.5} />
            <p className="cafe__paragraph">(8 відгуків)</p>
          </li>
        </ul>

        <div className="cafe__buttons">
          <div className="button-wrap cafe__button-wrap">
            {/* eslint-disable-next-line */}
            <button
              className="button button--like"
              id="likeButton"
              type="button"
            ></button>
            <label htmlFor="likeButton">Додати в улюблене</label>
          </div>
          <button className="search-bar__search cafe__menu" type="button">
            Меню
          </button>
        </div>
      </div>

      <StyledEngineProvider injectFirst>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            gridColumn: "span 8",
          }}
          className="cafe-info main__cafe-info"
        >
          <Tabs
            value={false}
            centered
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between",
            }}
            className="cafe-info__tabs"
          >
            {cafeInfoSections.map((section, index) => (
              <Tab
                value={index}
                key={section}
                label={section}
                onClick={() => handleSectionChange(section)}
                sx={{
                  width: "calc(100% / 3)",
                }}
                className={classNames("cafe-info__tab", {
                  "cafe-info__tab--active": cafeInfoSection === section,
                })}
              />
            ))}
          </Tabs>
          {cafeInfoSection === CafeInfoSections.DESCRIPTION && (
            <CafeDescription />
          )}

          {cafeInfoSection === CafeInfoSections.PHOTO && (
            <CafeImages />
          )}

          {cafeInfoSection === CafeInfoSections.TESTIMONIALS && (
            <CafeTestimonials />
          )}
        </Box>
      </StyledEngineProvider>

      <CardSwiper />
    </>
  );
};
