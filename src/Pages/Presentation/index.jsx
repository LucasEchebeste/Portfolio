import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../contexts/user";

export default function Presentation() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <div
        style={{ border: "1px solid transparent", marginBottom: '-2px'}}
        className={darkMode ? "presentationDark" : ""}
      >
        <div className="container d-none d-lg-block">
          <div style={{ marginTop: 245 }}>
            <div className="row ">
              <div className="d-flex justify-content-between">
                <div id="about" className="col-md-6">
                  <div
                    className={
                      darkMode ? "presentationTextDark" : "presentationText"
                    }
                  >
                    Oi 👋,
                    <br />
                    Meu nome é
                    <br />
                    <span className="presentationTextName">
                      Lucas Echebeste
                    </span>
                    <br />E sou desenvolvedor web Front-End.
                  </div>
                </div>
                <div style={{ width: 352 }} className="col-md-6">
                  <div className="presentationPicture"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--------------------------*/}

      <div
        style={{ width: "100%", backgroundColor: darkMode ? "#191919" : "" }}
        className="d-lg-none d-flex"
      >
        <div
          style={{ marginLeft: 25 }}
          className={
            darkMode ? "textPresentDarkMobile" : "textPresentLightMobile"
          }
        >
          Oi 👋,
          <br />
          Meu nome é
          <br />
          <span className="presentationTextNameMobile">Lucas Echebeste</span>
          <br />E sou desenvolvedor web.
        </div>

        <div>
          <div className="presentationPictureMobile"></div>
        </div>
      </div>
    </>
  );
}
