import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import uploadIcon from "../../assets/icons/upload-icon.svg";
import girlInGlasses from "../../assets/images/girl-in-glasses-image.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as imageActions from "../../features/image/imageSlice";

export const CabinetSettings: React.FC = () => {
  const { imageUrl, loading, error } = useAppSelector((state) => state.image);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  // console.log(imageUrl);

  useEffect(() => {
    if (file) {
      dispatch(imageActions.uploadProfileImage(file));
    }
  }, [file, dispatch]);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: "20px",
      }}
    >
      <h1 style={{ gridColumn: "span 8" }}>Зміна аватару</h1>
      <div
        style={{
          gridColumn: "span 2",
          height: "322px",
          position: "relative",
          backgroundImage: `url(${imageUrl || girlInGlasses})`,
          backgroundPosition: "center center",
          borderRadius: "12px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <label
          className="search-bar__search"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "43px",
            gap: "12px",
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor: "#F8F9FA",
            color: "#111111",
            borderRadius: "12px",
          }}
        >
          <VisuallyHiddenInput
            sx={{ zIndex: 3 }}
            type="file"
            onChange={(e) => handleFileChange(e)}
          />
          <img src={uploadIcon} alt="upload-icon" />
          Завантажити фото
        </label>
      </div>
      <div style={{ gridColumn: "span 6" }}>other photo</div>
    </div>
  );
};
