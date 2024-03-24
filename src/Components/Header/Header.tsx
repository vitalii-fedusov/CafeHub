import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/cafe-logo.svg";
import world from "../../assets/icons/world-icon.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import { useAppSelector } from "../../app/hooks";
import UserDwopdownMenu from "../UserDwopdownMenu/UserDwopdownMenu";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 630,
  height: 432,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "8px",
};

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="header page__header">
      <div className="top-bar header__top-bar">
        <a className="logo" href=".">
          <img src={logo} alt="CafeHub logo" />
        </a>

        <nav className="top-bar__nav">
          <ul className="top-bar__items">
            <li className="top-bar__item">
              <img className="top-bar__icon" src={arrowDown} alt="arrow down" />
              <span className="top-bar__icon">UA</span>
              <img className="top-bar__icon" src={world} alt="icon world" />
            </li>

            <li className="top-bar__item">
              {user ? (
                <UserDwopdownMenu />
              ) : (
                <>
                  <button
                    className="top-bar__button"
                    type="button"
                    onClick={handleOpen}
                  >
                    Вхід
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: "bold",
                          margin: "8px",
                        }}
                      >
                        Авторизація
                      </Typography>
                      <div className="auth-modal">
                        <button
                          className="auth-modal__button top-bar__button"
                          type="button"
                          onClick={() => {
                            navigate("/register");
                            handleClose();
                          }}
                        >
                          Зареєструватись
                        </button>
                        <button
                          className="auth-modal__button search-bar__search"
                          type="button"
                          onClick={() => {
                            navigate("/login");
                            handleClose();
                          }}
                        >
                          Вхід в аккаунт
                        </button>
                      </div>
                    </Box>
                  </Modal>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
