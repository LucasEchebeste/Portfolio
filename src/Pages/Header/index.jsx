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
                <div className="col-md-9 d-flex">
                  <div style={{ marginLeft: 360 }}>
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
                    <a href="https://github.com/LucasEchebeste" target="_blank">
                      {darkMode ? (
                        <img
                          style={{ marginLeft: 60, width: 30 }}
                          src={gitHubIconeLight}
                        />
                      ) : (
                        <img style={{ marginLeft: 60 }} src={gitHubIcone} />
                      )}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lucas-echebeste-503223208/"
                      target="_blank"
                    >
                      {darkMode ? (
                        <img
                          style={{ marginLeft: 30, width: 30 }}
                          src={linkedinIconeLight}
                        />
                      ) : (
                        <img style={{ marginLeft: 30 }} src={linkedinIcone} />
                      )}
                    </a>
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
