import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../contexts/user";

import linkIcone from "../../assets/imagens/linkicone.png";
import linkIconeLight from "../../assets/imagens/linkiconelight.png";
import gitHubIcone from "../../assets/imagens/githubicone.png";
import gitHubIconeLight from "../../assets/imagens/githubiconelightpequeno.png";

import bgCocacola from "../../assets/imagens/cocacola-logo.jpeg";
import bgJogoDaMemoria from "../../assets/imagens/bgjogodamemoria.png";
import bgJogoDaVelha from "../../assets/imagens/jogodavelha.png";
import bgPrimeFlix from "../../assets/imagens/bgprimeflix.jpg";
import bgToDoList from "../../assets/imagens/bgtodolist.jpg";
import bgNetflix from "../../assets/imagens/bgnetflix.webp";

export default function Projects() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <div
        className={darkMode ? "bgProjectsDark" : ""}
        style={{ border: "1px solid transparent", marginBottom: "-2px" }}
      >
        <div id="projects" className="container d-none d-lg-block">
          <div
            style={{ marginTop: 200 }}
            className={darkMode ? "titleProjectsDark" : "titleProjects"}
          >
            Projetos
          </div>
          <div
            style={{ marginTop: 50 }}
            className={darkMode ? "subtitleProjectsDark" : "subtitleProjects"}
          >
            Coisas que desenvolvi até aqui
          </div>
          <div className="d-flex justify-content-center flex-wrap">
            <div className={darkMode ? "cardProjectDark" : "cardProject"}>
              <div
                style={{ backgroundImage: `url(${bgCocacola})` }}
                className="bgCard"
              ></div>
              <div className="px-4">
                <div
                  style={{ marginTop: 25 }}
                  className={
                    darkMode ? "titleCardProjectDark" : "titleCardProject"
                  }
                >
                  Landing Page Coca-cola
                </div>
                <div
                  style={{ marginTop: 17 }}
                  className={
                    darkMode ? "textCardProjectDark" : "textCardProject"
                  }
                >
                  Desenvolvi esta landing page com a intenção de torná-la o mais
                  idêntica possível à página oficial da Coca-Cola. Fiz isso para
                  testar minhas habilidades e me desafiar, utilizando apenas
                  HTML/CSS
                </div>
                <div
                  style={{ marginTop: 15 }}
                  className={darkMode ? "techStackCardDark" : "techStackCard"}
                >
                  Tecnologias :{" "}
                  <span
                    className={
                      darkMode ? "techStackCardDoisDark" : "techStackCardDois"
                    }
                  >
                    HTML e CSS.
                  </span>
                </div>
                <div style={{ marginTop: 25 }} className="d-flex">
                  {darkMode ? (
                    <img src={linkIconeLight} />
                  ) : (
                    <img src={linkIcone} />
                  )}
                  <a
                    href="https://lucasechebeste.github.io/Landing-page-coca-cola/"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Página
                  </a>
                  {darkMode ? (
                    <img
                      style={{ marginLeft: 48, width: 30 }}
                      src={gitHubIconeLight}
                    />
                  ) : (
                    <img style={{ marginLeft: 48 }} src={gitHubIcone} />
                  )}
                  <a
                    href="https://github.com/LucasEchebeste/Landing-page-coca-cola"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>

            <div className={darkMode ? "cardProjectDark" : "cardProject"}>
              <div
                style={{ backgroundImage: `url(${bgJogoDaMemoria})` }}
                className="bgCard"
              ></div>

              <div className="px-4">
                <div
                  style={{ marginTop: 25 }}
                  className={
                    darkMode ? "titleCardProjectDark" : "titleCardProject"
                  }
                >
                  Jogo da Memória
                </div>
                <div
                  style={{ marginTop: 17 }}
                  className={
                    darkMode ? "textCardProjectDark" : "textCardProject"
                  }
                >
                  Projeto que criei com a intenção de me desafiar,
                  explorando novas habilidades e expandindo meu conhecimento.
                  Foi bastante complexo, mas consegui atingir o resultado
                  esperado.
                </div>
                <div
                  style={{ marginTop: 15 }}
                  className={darkMode ? "techStackCardDark" : "techStackCard"}
                >
                  Tecnologias :{" "}
                  <span
                    className={
                      darkMode ? "techStackCardDoisDark" : "techStackCardDois"
                    }
                  >
                    REACT, HTML e CSS.
                  </span>
                </div>
                <div style={{ marginTop: 25 }} className="d-flex">
                  {darkMode ? (
                    <img src={linkIconeLight} />
                  ) : (
                    <img src={linkIcone} />
                  )}
                  <a
                    href="https://jogodamemoria-eche.netlify.app/"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Página
                  </a>
                  {darkMode ? (
                    <img
                      style={{ marginLeft: 48, width: 30 }}
                      src={gitHubIconeLight}
                    />
                  ) : (
                    <img style={{ marginLeft: 48 }} src={gitHubIcone} />
                  )}
                  <a
                    href="https://github.com/LucasEchebeste/Jogo-da-memoria"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>

            <div className={darkMode ? "cardProjectDark" : "cardProject"}>
              <div
                style={{ backgroundImage: `url(${bgJogoDaVelha})` }}
                className="bgCard"
              ></div>

              <div className="px-4">
                <div
                  style={{ marginTop: 25 }}
                  className={
                    darkMode ? "titleCardProjectDark" : "titleCardProject"
                  }
                >
                  Jogo da Velha
                </div>
                <div
                  style={{ marginTop: 17 }}
                  className={
                    darkMode ? "textCardProjectDark" : "textCardProject"
                  }
                >
                  Desenvolvi este jogo da velha para testar meus conhecimentos
                  com React. Exigiu muito da minha lógica de programação,
                  solidificando ainda mais esse fundamento tão importante.
                </div>
                <div
                  style={{ marginTop: 15 }}
                  className={darkMode ? "techStackCardDark" : "techStackCard"}
                >
                  Tecnologias :{" "}
                  <span
                    className={
                      darkMode ? "techStackCardDoisDark" : "techStackCardDois"
                    }
                  >
                    REACT, HTML e CSS.
                  </span>
                </div>
                <div style={{ marginTop: 25 }} className="d-flex">
                  {darkMode ? (
                    <img src={linkIconeLight} />
                  ) : (
                    <img src={linkIcone} />
                  )}
                  <a
                    href="https://jogodavelha-eche.netlify.app/"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Página
                  </a>
                  {darkMode ? (
                    <img
                      style={{ marginLeft: 48, width: 30 }}
                      src={gitHubIconeLight}
                    />
                  ) : (
                    <img style={{ marginLeft: 48 }} src={gitHubIcone} />
                  )}
                  <a
                    href="https://github.com/LucasEchebeste/Jogo-da-velha"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>

            <div className={darkMode ? "cardProjectDark" : "cardProject"}>
              <div
                style={{ backgroundImage: `url(${bgPrimeFlix})` }}
                className="bgCard"
              ></div>

              <div className="px-4">
                <div
                  style={{ marginTop: 25 }}
                  className={
                    darkMode ? "titleCardProjectDark" : "titleCardProject"
                  }
                >
                  PrimeFlix
                </div>
                <div
                  style={{ marginTop: 17 }}
                  className={
                    darkMode ? "textCardProjectDark" : "textCardProject"
                  }
                >
                  Projeto no qual consumi uma API de filmes, implementei a
                  funcionalidade de favoritar e também assistir trailers de
                  filmes. Foi uma experiência muito agradável desenvolver esse
                  projeto.
                </div>
                <div
                  style={{ marginTop: 15 }}
                  className={darkMode ? "techStackCardDark" : "techStackCard"}
                >
                  Tecnologias :{" "}
                  <span
                    className={
                      darkMode ? "techStackCardDoisDark" : "techStackCardDois"
                    }
                  >
                    REACT, JS, HTML e CSS.
                  </span>
                </div>
                <div style={{ marginTop: 25 }} className="d-flex">
                  {darkMode ? (
                    <img src={linkIconeLight} />
                  ) : (
                    <img src={linkIcone} />
                  )}
                  <a
                    href="https://primeflix-eche.netlify.app/"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Página
                  </a>
                  {darkMode ? (
                    <img
                      style={{ marginLeft: 48, width: 30 }}
                      src={gitHubIconeLight}
                    />
                  ) : (
                    <img style={{ marginLeft: 48 }} src={gitHubIcone} />
                  )}
                  <a
                    href="https://github.com/LucasEchebeste/Primeflix"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>

            <div className={darkMode ? "cardProjectDark" : "cardProject"}>
              <div
                style={{ backgroundImage: `url(${bgToDoList})` }}
                className="bgCard"
              ></div>

              <div className="px-4">
                <div
                  style={{ marginTop: 25 }}
                  className={
                    darkMode ? "titleCardProjectDark" : "titleCardProject"
                  }
                >
                  Lista de Tarefas
                </div>
                <div
                  style={{ marginTop: 17 }}
                  className={
                    darkMode ? "textCardProjectDark" : "textCardProject"
                  }
                >
                  Projeto que desenvolvi para listar minhas tarefas diárias e
                  marcá-las como concluídas após terminá-las. Utilizei o
                  Firebase como banco de dados para este propósito.
                </div>
                <div
                  style={{ marginTop: 15 }}
                  className={darkMode ? "techStackCardDark" : "techStackCard"}
                >
                  Tecnologias :{" "}
                  <span
                    className={
                      darkMode ? "techStackCardDoisDark" : "techStackCardDois"
                    }
                  >
                    REACT, FIREBASE, HTML e CSS.
                  </span>
                </div>
                <div style={{ marginTop: 25 }} className="d-flex">
                  {darkMode ? (
                    <img src={linkIconeLight} />
                  ) : (
                    <img src={linkIcone} />
                  )}
                  <a
                    href="https://listadetarefas-eche.netlify.app/"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Página
                  </a>
                  {darkMode ? (
                    <img
                      style={{ marginLeft: 48, width: 30 }}
                      src={gitHubIconeLight}
                    />
                  ) : (
                    <img style={{ marginLeft: 48 }} src={gitHubIcone} />
                  )}
                  <a
                    href="https://github.com/LucasEchebeste/Fireapp"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>

            <div className={darkMode ? "cardProjectDark" : "cardProject"}>
              <div
                style={{ backgroundImage: `url(${bgNetflix})` }}
                className="bgCard"
              ></div>

              <div className="px-4">
                <div
                  style={{ marginTop: 25 }}
                  className={
                    darkMode ? "titleCardProjectDark" : "titleCardProject"
                  }
                >
                  Netflix clone
                </div>
                <div
                  style={{ marginTop: 17 }}
                  className={
                    darkMode ? "textCardProjectDark" : "textCardProject"
                  }
                >
                  Resolvi criar este projeto com a intenção de desenvolver uma
                  aplicação, que fosse o mais próximo possível da página inicial
                  da Netflix. Foi um projeto complexo, mas o resultado foi
                  ótimo.
                </div>
                <div
                  style={{ marginTop: 15 }}
                  className={darkMode ? "techStackCardDark" : "techStackCard"}
                >
                  Tecnologias :{" "}
                  <span
                    className={
                      darkMode ? "techStackCardDoisDark" : "techStackCardDois"
                    }
                  >
                    REACT, HTML e CSS.
                  </span>
                </div>
                <div style={{ marginTop: 25 }} className="d-flex">
                  {darkMode ? (
                    <img src={linkIconeLight} />
                  ) : (
                    <img src={linkIcone} />
                  )}
                  <a
                    href="https://netflixclone-eche.netlify.app"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Página
                  </a>
                  {darkMode ? (
                    <img
                      style={{ marginLeft: 48, width: 30 }}
                      src={gitHubIconeLight}
                    />
                  ) : (
                    <img style={{ marginLeft: 48 }} src={gitHubIcone} />
                  )}
                  <a
                    href="https://github.com/LucasEchebeste/Clone-Netflix"
                    target="_blank"
                    style={{ marginLeft: 10 }}
                    className={darkMode ? "linksProjectDark" : "linksProjec"}
                  >
                    Ver Código
                  </a>
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
              darkMode ? "titleProjectsDarkMobile" : "titleProjectsMobile"
            }
          >
            Projetos
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className={
              darkMode ? "subTitleProjectsDarkMobile" : "subTitleProjectsMobile"
            }
          >
            Coisas que desenvolvi até aqui
          </div>
        </div>

        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-around flex-wrap"
        >
          <div
            style={{ marginTop: 25 }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: 15 }}
              className={
                darkMode ? "cardProjectDarkMobile" : "cardProjectMobile"
              }
            >
              <div
                style={{ backgroundImage: `url(${bgCocacola})` }}
                className="bgCardMobile"
              ></div>
              <div
                style={{ marginTop: 5 }}
                className={
                  darkMode
                    ? "titleCardProjectDarkMobile"
                    : "titleCardProjectMobile"
                }
              >
                Landing Page Coca-cola
              </div>
              <div
                style={{ marginTop: 5, marginRight: 15 }}
                className={
                  darkMode
                    ? "textCardProjectDarkMobile"
                    : "textCardProjectMobile"
                }
              >
                Desenvolvi esta landing page com a intenção de torná-la o mais
                idêntica possível à página oficial da Coca-Cola. Fiz isso para
                testar minhas habilidades e me desafiar, utilizando apenas
                HTML/CSS
              </div>
              <div
                style={{ marginTop: 10 }}
                className={
                  darkMode ? "techStackCardDarkMobile" : "techStackCardMobile"
                }
              >
                Tecnologias :{" "}
                <span
                  className={
                    darkMode
                      ? "techStackCardDoisDarkMobile"
                      : "techStackCardDoisMobile"
                  }
                >
                  HTML e CSS.
                </span>
              </div>
              <div style={{ marginTop: 10, marginLeft: 20 }} className="d-flex">
                {darkMode ? (
                  <img width={"20px"} src={linkIconeLight} />
                ) : (
                  <img width={"20px"} src={linkIcone} />
                )}
                <a
                  href="https://lucasechebeste.github.io/Landing-page-coca-cola/"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver página
                </a>
                {darkMode ? (
                  <img
                    style={{ marginLeft: 18, width: 20 }}
                    src={gitHubIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 18 }}
                    src={gitHubIcone}
                  />
                )}
                <a
                  href="https://github.com/LucasEchebeste/Landing-page-coca-cola"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ marginTop: 25 }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: 15 }}
              className={
                darkMode ? "cardProjectDarkMobile" : "cardProjectMobile"
              }
            >
              <div
                style={{ backgroundImage: `url(${bgJogoDaMemoria})` }}
                className="bgCardMobile"
              ></div>
              <div
                style={{ marginTop: 5 }}
                className={
                  darkMode
                    ? "titleCardProjectDarkMobile"
                    : "titleCardProjectMobile"
                }
              >
                Jogo da Memória
              </div>
              <div
                style={{ marginTop: 5, marginRight: 15 }}
                className={
                  darkMode
                    ? "textCardProjectDarkMobile"
                    : "textCardProjectMobile"
                }
              >
                  Projeto que criei com a intenção de me desafiar,
                  explorando novas habilidades e expandindo meu conhecimento.
                  Foi bastante complexo, mas consegui atingir o resultado
                  esperado.
              </div>
              <div
                style={{ marginTop: 10 }}
                className={
                  darkMode ? "techStackCardDarkMobile" : "techStackCardMobile"
                }
              >
                Tecnologias :{" "}
                <span
                  className={
                    darkMode
                      ? "techStackCardDoisDarkMobile"
                      : "techStackCardDoisMobile"
                  }
                >
                  REACT, HTML e CSS.
                </span>
              </div>
              <div style={{ marginTop: 10, marginLeft: 20 }} className="d-flex">
                {darkMode ? (
                  <img width={"20px"} src={linkIconeLight} />
                ) : (
                  <img width={"20px"} src={linkIcone} />
                )}
                <a
                  href="https://jogodamemoria-eche.netlify.app/"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver página
                </a>
                {darkMode ? (
                  <img
                    style={{ marginLeft: 18, width: 20 }}
                    src={gitHubIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 18 }}
                    src={gitHubIcone}
                  />
                )}
                <a
                  href="https://github.com/LucasEchebeste/Jogo-da-memoria"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ marginTop: 25 }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: 15 }}
              className={
                darkMode ? "cardProjectDarkMobile" : "cardProjectMobile"
              }
            >
              <div
                style={{ backgroundImage: `url(${bgJogoDaVelha})` }}
                className="bgCardMobile"
              ></div>
              <div
                style={{ marginTop: 5 }}
                className={
                  darkMode
                    ? "titleCardProjectDarkMobile"
                    : "titleCardProjectMobile"
                }
              >
                Jogo da Velha
              </div>
              <div
                style={{ marginTop: 5, marginRight: 15 }}
                className={
                  darkMode
                    ? "textCardProjectDarkMobile"
                    : "textCardProjectMobile"
                }
              >
                Desenvolvi este jogo da velha para testar meus conhecimentos com
                React. Exigiu muito da minha lógica de programação,
                solidificando ainda mais esse fundamento tão importante.
              </div>
              <div
                style={{ marginTop: 10 }}
                className={
                  darkMode ? "techStackCardDarkMobile" : "techStackCardMobile"
                }
              >
                Tecnologias :{" "}
                <span
                  className={
                    darkMode
                      ? "techStackCardDoisDarkMobile"
                      : "techStackCardDoisMobile"
                  }
                >
                  REACT, HTML e CSS.
                </span>
              </div>
              <div style={{ marginTop: 10, marginLeft: 20 }} className="d-flex">
                {darkMode ? (
                  <img width={"20px"} src={linkIconeLight} />
                ) : (
                  <img width={"20px"} src={linkIcone} />
                )}
                <a
                  href="https://jogodavelha-eche.netlify.app/"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver página
                </a>
                {darkMode ? (
                  <img
                    style={{ marginLeft: 18, width: 20 }}
                    src={gitHubIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 18 }}
                    src={gitHubIcone}
                  />
                )}
                <a
                  href="https://github.com/LucasEchebeste/Jogo-da-velha"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ marginTop: 25 }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: 15 }}
              className={
                darkMode ? "cardProjectDarkMobile" : "cardProjectMobile"
              }
            >
              <div
                style={{ backgroundImage: `url(${bgPrimeFlix})` }}
                className="bgCardMobile"
              ></div>
              <div
                style={{ marginTop: 5 }}
                className={
                  darkMode
                    ? "titleCardProjectDarkMobile"
                    : "titleCardProjectMobile"
                }
              >
                PrimeFlix
              </div>
              <div
                style={{ marginTop: 5, marginRight: 15 }}
                className={
                  darkMode
                    ? "textCardProjectDarkMobile"
                    : "textCardProjectMobile"
                }
              >
                Projeto no qual consumi uma API de filmes, implementei a
                funcionalidade de favoritar e também assistir trailers de
                filmes. Foi uma experiência desafiadora, e ao mesmo tempo, muito
                divertido desenvolver esse projeto.
              </div>
              <div
                style={{ marginTop: 10 }}
                className={
                  darkMode ? "techStackCardDarkMobile" : "techStackCardMobile"
                }
              >
                Tecnologias :{" "}
                <span
                  className={
                    darkMode
                      ? "techStackCardDoisDarkMobile"
                      : "techStackCardDoisMobile"
                  }
                >
                  REACT, HTML e CSS.
                </span>
              </div>
              <div style={{ marginTop: 10, marginLeft: 20 }} className="d-flex">
                {darkMode ? (
                  <img width={"20px"} src={linkIconeLight} />
                ) : (
                  <img width={"20px"} src={linkIcone} />
                )}
                <a
                  href="https://primeflix-eche.netlify.app/"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver página
                </a>
                {darkMode ? (
                  <img
                    style={{ marginLeft: 18, width: 20 }}
                    src={gitHubIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 18 }}
                    src={gitHubIcone}
                  />
                )}
                <a
                  href="https://github.com/LucasEchebeste/Primeflix"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ marginTop: 25 }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: 15 }}
              className={
                darkMode ? "cardProjectDarkMobile" : "cardProjectMobile"
              }
            >
              <div
                style={{ backgroundImage: `url(${bgToDoList})` }}
                className="bgCardMobile"
              ></div>
              <div
                style={{ marginTop: 5 }}
                className={
                  darkMode
                    ? "titleCardProjectDarkMobile"
                    : "titleCardProjectMobile"
                }
              >
                Lista de Tarefas
              </div>
              <div
                style={{ marginTop: 5, marginRight: 15 }}
                className={
                  darkMode
                    ? "textCardProjectDarkMobile"
                    : "textCardProjectMobile"
                }
              >
                Projeto que desenvolvi para listar minhas tarefas diárias e
                marcá-las como concluídas após terminá-las. Utilizei o Firebase
                como banco de dados para este propósito.
              </div>
              <div
                style={{ marginTop: 10 }}
                className={
                  darkMode ? "techStackCardDarkMobile" : "techStackCardMobile"
                }
              >
                Tecnologias :{" "}
                <span
                  className={
                    darkMode
                      ? "techStackCardDoisDarkMobile"
                      : "techStackCardDoisMobile"
                  }
                >
                  REACT, FIREBASE, HTML e CSS.
                </span>
              </div>
              <div style={{ marginTop: 10, marginLeft: 20 }} className="d-flex">
                {darkMode ? (
                  <img width={"20px"} src={linkIconeLight} />
                ) : (
                  <img width={"20px"} src={linkIcone} />
                )}
                <a
                  href="https://listadetarefas-eche.netlify.app/"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver página
                </a>
                {darkMode ? (
                  <img
                    style={{ marginLeft: 18, width: 20 }}
                    src={gitHubIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 18 }}
                    src={gitHubIcone}
                  />
                )}
                <a
                  href="https://github.com/LucasEchebeste/Fireapp"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ marginTop: 25 }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: 15 }}
              className={
                darkMode ? "cardProjectDarkMobile" : "cardProjectMobile"
              }
            >
              <div
                style={{ backgroundImage: `url(${bgNetflix})` }}
                className="bgCardMobile"
              ></div>
              <div
                style={{ marginTop: 5 }}
                className={
                  darkMode
                    ? "titleCardProjectDarkMobile"
                    : "titleCardProjectMobile"
                }
              >
                Clone Netflix
              </div>
              <div
                style={{ marginTop: 5, marginRight: 15 }}
                className={
                  darkMode
                    ? "textCardProjectDarkMobile"
                    : "textCardProjectMobile"
                }
              >
                Resolvi criar este projeto com a intenção de desenvolver uma
                aplicação, que fosse o mais próximo possível da página inicial
                da Netflix. Foi um projeto complexo, mas o resultado foi ótimo.
              </div>
              <div
                style={{ marginTop: 10 }}
                className={
                  darkMode ? "techStackCardDarkMobile" : "techStackCardMobile"
                }
              >
                Tecnologias :{" "}
                <span
                  className={
                    darkMode
                      ? "techStackCardDoisDarkMobile"
                      : "techStackCardDoisMobile"
                  }
                >
                  REACT, JS, HTML e CSS.
                </span>
              </div>
              <div style={{ marginTop: 10, marginLeft: 20 }} className="d-flex">
                {darkMode ? (
                  <img width={"20px"} src={linkIconeLight} />
                ) : (
                  <img width={"20px"} src={linkIcone} />
                )}
                <a
                  href="https://netflixclone-eche.netlify.app/"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver página
                </a>
                {darkMode ? (
                  <img
                    style={{ marginLeft: 18, width: 20 }}
                    src={gitHubIconeLight}
                  />
                ) : (
                  <img
                    width={"20px"}
                    style={{ marginLeft: 18 }}
                    src={gitHubIcone}
                  />
                )}
                <a
                  href="https://github.com/LucasEchebeste/Clone-Netflix"
                  target="_blank"
                  style={{ marginLeft: 10 }}
                  className={
                    darkMode ? "linksProjectDarkMobile" : "linksProjectMobile"
                  }
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid gray", marginTop: 30 }}></div>
      </div>
    </>
  );
}
