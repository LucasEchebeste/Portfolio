import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../contexts/user";

import gitHubIcone from "../../assets/imagens/githubicone.png";
import linkedinIcone from "../../assets/imagens/linkedinicone.png";

import linkedinIconeLight from "../../assets/imagens/linkediniconepequenolight.png";
import gitHubIconeLight from "../../assets/imagens/githubiconelightpequeno.png";

export default function Footer() {
  const { darkMode, scrollToSection } = useContext(UserContext);

  return (
    <>
      <div className={darkMode ? "bgFooterDark" : ""}>
        <div className="container d-none d-lg-block">
          <div className="row">
            <div className="col-md-5"></div>

            <div className="col-md-7">
              <div
                style={{ marginTop: 225 }}
                className="d-flex justify-content-around"
              >
                <div
                  id="contact"
                  className={darkMode ? "celularFooterDark" : "celularFooter"}
                >
                  (53)99186 9450
                </div>
                <div className={darkMode ? "emailFooterDark" : "emailFooter"}>
                  echebesteee.lucas@gmail.com
                </div>

                <div>
                  <a href="https://github.com/LucasEchebeste" target="_blank">
                    {darkMode ? (
                      <img style={{ width: 30 }} src={gitHubIconeLight} />
                    ) : (
                      <img src={gitHubIcone} />
                    )}
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/lucas-echebeste-503223208/"
                    target="_blank"
                  >
                    {darkMode ? (
                      <img src={linkedinIconeLight} />
                    ) : (
                      <img src={linkedinIcone} />
                    )}
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ marginTop: 70, borderBottom: "7px solid" }}
              className={darkMode ? "lineFooterDark" : "lineFooter"}
            ></div>

            <div style={{ marginTop: 60, marginBottom: 50 }} className="row">
              <div className="col-md-6">
                <span
                  className={darkMode ? "itemMenuFooterDark" : "itemMenuFooter"}
                  onClick={() => scrollToSection("header")}
                >
                  Início
                </span>
                <span
                  style={{ marginLeft: 70 }}
                  className={darkMode ? "itemMenuFooterDark" : "itemMenuFooter"}
                  onClick={() => scrollToSection("about")}
                >
                  Sobre
                </span>
                <span
                  style={{ marginLeft: 70 }}
                  className={darkMode ? "itemMenuFooterDark" : "itemMenuFooter"}
                  onClick={() => scrollToSection("tech")}
                >
                  Tecnologias
                </span>
                <span
                  style={{ marginLeft: 70 }}
                  className={darkMode ? "itemMenuFooterDark" : "itemMenuFooter"}
                  onClick={() => scrollToSection("projects")}
                >
                  Projetos
                </span>
                <span
                  style={{ marginLeft: 70 }}
                  className={darkMode ? "itemMenuFooterDark" : "itemMenuFooter"}
                  onClick={() => scrollToSection("contact")}
                >
                  Contatos
                </span>
              </div>

              <div className="col-md-6">
                <div
                  style={{ marginLeft: 250 }}
                  className={darkMode ? "authorFooterDark" : "authorFooter"}
                >
                  Desenvolvido e estilizado por{" "}
                  <span
                    className={
                      darkMode ? "authorFooterNameDark" : "authorFooterName"
                    }
                  >
                    Lucas Echebeste
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--------------------------*/}

      <div
        style={{
          width: "100%",
          backgroundColor: darkMode ? "#191919" : "",
        }}
        className="d-lg-none"
      >
        <div className="d-flex justify-content-center">
          <div
            style={{ marginTop: 20 }}
            className={
              darkMode ? "titleContactDarkMobile" : "titleContactMobile"
            }
          >
            Contatos
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div
            style={{ marginTop: 20 }}
            className={
              darkMode ? "contactFooterDarkMobile" : "contactFooterMobile"
            }
          >
            echebesteee.lucas@gmail.com
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className={
              darkMode ? "contactFooterDarkMobile" : "contactFooterMobile"
            }
          >
            (53)99186-9450
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div
            style={{ marginTop: 15 }}
            className={
              darkMode ? "authorFooterDarkMobile" : "authorFooterMobile"
            }
          >
            Desenvolvido e estilizado por{" "}
            <span
              className={
                darkMode
                  ? "authorFooterNameDarkMobile"
                  : "authorFooterNameMobile"
              }
            >
              Lucas Echebeste
            </span>{" "}
          </div>

          <div style={{ marginLeft: 25, marginTop: 13 }} className="d-flex">
            <div style={{ marginBottom: 5 }}>
              <a href="https://github.com/LucasEchebeste" target="_blank">
                {darkMode ? (
                  <img width={"20px"} src={gitHubIconeLight} />
                ) : (
                  <img width={"20px"} src={gitHubIcone} />
                )}
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-echebeste-503223208/"
                target="_blank"
              >
                {darkMode ? (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 10 }}
                    src={linkedinIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 10 }}
                    src={linkedinIcone}
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
