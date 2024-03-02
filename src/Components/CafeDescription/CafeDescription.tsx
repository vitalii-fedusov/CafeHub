import React from "react";
import allDoneIcon from "../../assets/icons/done-all-icon.svg";
import circusBuildingIcon from "../../assets/icons/circus-building-icon.svg";

export const CafeDescription: React.FC = () => {
  const features = [
    "Швидке обслуговування",
    "Паркінг",
    "Швидкий Wi-Fi",
    "Відкрита тераса",
    "Pet friendly",
  ];

  const occasions = ["Ділові зустрічі", "Романтична вечеря"];

  return (
    <div className="cafe-section">
      <article className="cafe-section__article">
        Затишна кав’ярня на Подолі, тут можна випити кави або купити її собі
        додому у зернах. Також є сніданки, випічка та солодощі. Можна приходити
        із домашніми тваринами. Цікаво, що перша концепція закладу – місце,
        звідки починається ваша подорож. Ми думаємо, що це дуже круто – випити
        каву перед довгою дорогою у хорошій компанії або ж зібратись на каву з
        друзями та разом придумати чергову круту мандрівку!
      </article>

      <div className="cafe-features">
        <div className="cafe-feature cafe-feature--features">
          <h3 className="cafe-feature__title">Особливості</h3>

          <ul className="cafe-feature__list">
            {features.map((feature) => (
              <li key={feature} className="cafe-feature__item">
                <img
                  src={allDoneIcon}
                  alt="all-done-icon"
                  className="cafe-feature__icon"
                />
                <p className="cafe-feature__text">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="cafe-feature cafe-feature--occasion">
          <h3 className="cafe-feature__title">Привід</h3>

          <ul className="cafe-feature__list">
            {occasions.map((occasion) => (
              <li key={occasion} className="cafe-feature__item">
                <img
                  src={circusBuildingIcon}
                  alt="circus-building-icon"
                  className="cafe-feature__icon"
                />
                <p className="cafe-feature__text">{occasion}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
