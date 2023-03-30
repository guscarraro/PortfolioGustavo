import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import VanillaTilt from "vanilla-tilt";
import img from "../src/assets/node.svg";

import {
  StyledBody,
  StyledGitHub,
  StyledLinkedin,
  StyledWhats,
  StyledDivPessoal,
  ContainerGeral,
  StyledDivCards,
  StyledProject,
  StyledSectionContainer,
  StyledDivDescription,
  StyledSection2,
  StyledHeader,
  SectionSkill,
} from "./App.js";

import "./App.js";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 15,
      glare: true,
      speed: 400,
      "max-glare": 1,
    });
  }, []);

  return (
    <div>
      <StyledHeader>
        <div>
          <img
            src="../src/assets/GC.png"
            className="animate__animated animate__lightSpeedInLeft"
            alt=""
          />
          <p className="animate__animated animate__lightSpeedInLeft">Gustavo</p>

          <StyledDivPessoal className="animate__animated animate__lightSpeedInLeft">
            <StyledGitHub
              className="fake"
              href="https://github.com/guscarraro"
              target="_blank"
            ></StyledGitHub>
            <StyledLinkedin
              className="link"
              href="https://www.linkedin.com/in/gustavo-carraro-192554161/"
              target="_blank"
            ></StyledLinkedin>
            <StyledWhats
              className="whats"
              href="https://wa.me/+5541991627359"
              target="_blank"
            ></StyledWhats>
          </StyledDivPessoal>
        </div>
      </StyledHeader>
      <StyledSectionContainer>
        <ContainerGeral>
          <StyledBody>
            <div className="NomeCity">
              <h1 className="animate__animated animate__backInDown">
                Olá,
                <br />
                Eu sou Gustavo,
                <br /> web devesenvolvedor
              </h1>
            </div>
            <StyledDivDescription>
              <div>
                <p className="Description">Bio</p>
                <p>
                  Meu nome é Gustavo Henrique Carraro e sou um desenvolvedor
                  Front-end de 25 anos de idade, moro em Curitiba-PR Estou em
                  constante busca pelo aprimoramento de minhas habilidades e
                  conhecimentos em programação, e me dedico diariamente para me
                  tornar um desenvolvedor Full-stack até setembro deste ano.
                </p>
              </div>
            </StyledDivDescription>
          </StyledBody>
        </ContainerGeral>
      </StyledSectionContainer>
      <div>
        <SectionSkill>
          <h3>Skills & Experiencia</h3>
          <div>
            <ul>
              <li>
                <p className="ReactIMG">React</p>
              </li>
              <li>
                <p className="JSIMG">JavaScript</p>
              </li>
              <li>
                <p className="HTML5IMG">HTML5</p>
              </li>
              <li>
                <img src={img} className="NODEIMG"></img>
              </li>
              <li className="CIMG">
                <p>C</p>
              </li>
              <li>
                <p className="JAVAIMG">JAVA</p>
              </li>
              <li>
                <p className="CSSIMG">CSS3</p>
              </li>
            </ul>
          </div>
        </SectionSkill>
      </div>
      <StyledSection2>
        <StyledProject>
          <StyledDivCards>
            <div className="ProjetosP">
              <h2 className="animate__animated animate__backInDown">
                PROJETOS
              </h2>
            </div>
            <ul className="animate__animated animate__lightSpeedInLeft">
              <li className="card StyledHomeYou">
                <div>
                  {/* <img src="../src/assets/HomeYou.png"></img> */}
                  <h4> HomeYou</h4>
                  <p>
                    Projeto para alugueis de casas, desenvolvido no mesmo
                    formato da AirBnb. Foi uma jornada muito intensa, cheia de
                    desafios e de muito aprendizado. Utilizei diversas
                    ferramentas no desenvolvimento, como o React, CSS, JS, TS,
                    HTML, API, JSON.
                  </p>
                  <a href="#">Mais informacoes</a>
                </div>
              </li>

              <li className="card StyledHamburgueria">
                <div>
                  {/* <img src="../src/assets/BurguerKenzie.png"></img> */}
                  <h4>Hamburgueria</h4>
                  <p>
                    Um projeto com o intuito de ser delivery, onde o cliente
                    solicita o que deseja, mostrando todas as informações para o
                    usuario. Utilizei diversas ferramentas no desenvolvimento,
                    como o React, CSS, JS, TS, HTML, API, JSON.
                  </p>
                  <a href="#">Mais informacoes</a>
                </div>
              </li>

              <li className="card StyledNuKenzie">
                <div>
                  {/* <img src="../src/assets/NuKenzie.png"></img> */}
                  <h4>NuKenzie</h4>
                  <p>
                    Projeto com o intuito de planejar as entradas e saidas do
                    cliente, para melhor planejamento de sua rotina. Utilizei
                    diversas ferramentas no desenvolvimento, como o React, CSS,
                    JS, TS, HTML, API, JSON.
                    <a href="#">Mais informacoes</a>
                  </p>
                </div>
              </li>
            </ul>
          </StyledDivCards>
        </StyledProject>
      </StyledSection2>
    </div>
  );
}

export default App;
