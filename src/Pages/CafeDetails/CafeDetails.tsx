import React from "react";
import { useNavigate } from "react-router-dom";

export const CafeDetails: React.FC = () => {
  const navigate = useNavigate();

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
    </>
  );
};
