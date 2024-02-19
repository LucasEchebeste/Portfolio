import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../contexts/user";

import htmlIcone from "../../assets/imagens/htmlicone.png";
import cssIcone from "../../assets/imagens/cssicone.png";
import jsIcone from "../../assets/imagens/jsicone.png";
import reactIcone from "../../assets/imagens/reacticone.png";
import vectorIcone from "../../assets/imagens/vectoricone.png";
import bootstrapIcone from "../../assets/imagens/bootstrapicone.png";
import tailwindIcone from "../../assets/imagens/tailwindicone.png";
import sassIcone from "../../assets/imagens/sassicone.png";
import gitIcone from "../../assets/imagens/giticone.png";
import greenSockIcone from "../../assets/imagens/greensockicone.png";
import greenSockIconeLight from "../../assets/imagens/greensockiconelight.png";
import vscodeIcone from "../../assets/imagens/vscodeicone.png";
import gitHubIconeGrande from "../../assets/imagens/githubgrandeicone.png";
import gitHubIconeLight from "../../assets/imagens/githubiconelight.png";

export default function Techstack() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <div
        id="tech"
        style={{ border: "1px solid transparent" }}
        className={darkMode ? "techStackDark" : ""}
      >
        <div className="container d-none d-lg-block">
          <div style={{ marginTop: 250 }} className={darkMode ? "titleTechStackDark" : "titleTechStack"}>
            Tecnologias
          </div>
          <div style={{ marginTop: 45 }} className={darkMode ? "subTitleTechStackDark" : "subTitleTechStack"}>
            Tecnologias que uso frequentemente
          </div>
          <div style={{ marginTop: 140 }} className="cardsTechStack">
            <img src={htmlIcone} />
            <img style={{ marginLeft: 180 }} src={cssIcone} />
            <img style={{ marginLeft: 180 }} src={jsIcone} />
            <img style={{ marginLeft: 180 }} src={reactIcone} />
            <img style={{ marginLeft: 180 }} src={vectorIcone} />
            <img style={{ marginLeft: 180 }} src={bootstrapIcone} />
          </div>
          <div style={{ marginTop: 70 }}>
            <img src={tailwindIcone} />
            <img style={{ marginLeft: 180 }} src={sassIcone} />
            <img style={{ marginLeft: 180 }} src={gitIcone} />
            {darkMode ? (
              <img style={{ marginLeft: 180 }} src={greenSockIconeLight} />
            ) : (
              <img style={{ marginLeft: 180 }} src={greenSockIcone} />
            )}
            <img style={{ marginLeft: 180 }} src={vscodeIcone} />
            {darkMode ? (
              <img style={{ marginLeft: 180 }} src={gitHubIconeLight} />
            ) : (
              <img style={{ marginLeft: 180 }} src={gitHubIconeGrande} />
            )}
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
        <div
          className={
            darkMode ? "titleTechStackDarkMobile" : "titleTechStackMobile"
          }
        >
          <div style={{ marginTop: 45 }}>Tecnologias</div>
        </div>
        <div
          className={
            darkMode ? "subTitleTechStackDarkMobile" : "subTitleTechStackMobile"
          }
        >
          Tecnologias que uso frequentemente
        </div>

        <div className="px-4">

          <div style={{marginTop: 50}} className="d-flex justify-content-between">
            <img width={70} height={70} src={htmlIcone} />
            <img width={70} height={70} src={cssIcone} />
            <img width={70} height={70} src={jsIcone} />
          </div>

          <div style={{marginTop: 30}} className="d-flex justify-content-between">
            <img width={70} height={70} src={reactIcone} />
            <img width={70} height={70} src={vectorIcone} />
            <img width={60} height={70} src={bootstrapIcone} />
          </div>

          <div style={{marginTop: 30}} className="d-flex justify-content-between">
            <img width={70} height={70} src={tailwindIcone} />
            <img width={70} height={70} src={sassIcone} />
            <img width={70} height={70} src={gitIcone} />
          </div>

          <div style={{marginTop: 30}} className="d-flex justify-content-between">
            <img width={70} height={70} src={ darkMode? greenSockIconeLight : greenSockIcone} />
            <img width={70} height={70} src={vscodeIcone} />
            <img width={70} height={70} src={ darkMode ? gitHubIconeLight : gitHubIconeGrande} />
          </div>
        </div>

       
        <div style={{ border: "1px solid gray", marginTop: 30 }}></div>
      </div>
    </>
  );
}
