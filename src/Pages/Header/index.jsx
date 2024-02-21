import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user";
import "./index.css";

import gitHubIcone from "../../assets/imagens/githubicone.png";
import linkedinIcone from "../../assets/imagens/linkedinicone.png";
import linkedinIconeLight from "../../assets/imagens/linkediniconepequenolight.png";
import gitHubIconeLight from "../../assets/imagens/githubiconelightpequeno.png";

export default function Header() {
  const { darkMode, setDarkMode, scrollToSection } = useContext(UserContext);

  // Obtém o estado inicial do localStorage ou usa false se não existir
  const estadoInicial = JSON.parse(localStorage.getItem("meuEstado")) || false;

  // Inicializa o estado com o valor obtido do localStorage
  const [meuEstado, setMeuEstado] = useState(estadoInicial);

  // Atualiza o localStorage sempre que o estado muda
  useEffect(() => {
    localStorage.setItem("meuEstado", JSON.stringify(meuEstado));
    setDarkMode(meuEstado);
  }, [meuEstado]);

  const handleClick = () => {
    setMeuEstado(!meuEstado);
  };

  return (
    <>
      <div id="header" className="d-none d-lg-block">
        <div
          id={darkMode ? "homeDark" : "home"}
          style={{ border: "1px solid transparent" }}
          className={darkMode ? "darkPage" : ""}
        >
          <div className="container">
            <div style={{ marginTop: 50 }}>
              <div className="row">
                <div className="col-md-3">
                  <button
                    className={darkMode ? "botaoLight" : "botaoDark"}
                    style={{ position: "absolute" }}
                    onClick={() => handleClick()}
                  >
                    {darkMode ? "Claro" : "Noite"}
                  </button>
                </div>
                <div className="col-md-9">
                  <div>
                    <div
                      style={{ marginLeft: 200 }}
                      className="d-flex justify-content-around"
                    >
                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                        onClick={() => scrollToSection("header")}
                      >
                        Início
                      </span>
                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                        onClick={() => scrollToSection("about")}
                      >
                        Sobre
                      </span>
                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                        onClick={() => scrollToSection("tech")}
                      >
                        Tecnologias
                      </span>
                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                        onClick={() => scrollToSection("projects")}
                      >
                        Projetos
                      </span>
                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                        onClick={() => scrollToSection("contact")}
                      >
                        Contatos
                      </span>

                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                      >
                        <a
                          href="https://github.com/LucasEchebeste"
                          target="_blank"
                        >
                          {darkMode ? (
                            <img
                              style={{ width: "30px" }}
                              src={gitHubIconeLight}
                            />
                          ) : (
                            <img src={gitHubIcone} />
                          )}
                        </a>
                      </span>

                      <span
                        className={
                          darkMode ? "itemMenuHeaderDark" : "itemMenuHeader"
                        }
                      >
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
                      </span>
                    </div>
                  </div>
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
          height: 80,
          backgroundColor: darkMode ? "#191919" : "",
        }}
        className="d-lg-none"
      >
        <button
          className={darkMode ? "botaoLightMobile" : "botaoDarkMobile"}
          onClick={() => handleClick()}
        >
          {darkMode ? "Claro" : "Noite"}
        </button>
      </div>
    </>
  );
}
