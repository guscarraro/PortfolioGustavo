import { useEffect, useState } from "react";

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
  // StyledSectionCompetencias,
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
                <br /> desenvolvedor web
              </h1>
            </div>
            <StyledDivDescription>
              <div>
                <p className="Description">Bio</p>
                <p>
                  Meu nome é Gustavo Henrique Carraro e sou um desenvolvedor
                  Front-end de 25 anos de idade, moro em Curitiba-PR. Hoje estou
                  cursando Engenharia de Software na Universidade Positivo,
                  estou no 3º periodo, em constante busca pelo aprimoramento de
                  minhas habilidades e conhecimentos em programação, e me dedico
                  diariamente para me tornar um desenvolvedor Full-stack até
                  setembro deste ano na Kenzie Academy Brazil!
                </p>
              </div>
            </StyledDivDescription>
          </StyledBody>
        </ContainerGeral>
      </StyledSectionContainer>
      <div>
        <SectionSkill>
          <div>
            <h3>Skills & Experiencia</h3>

            {/* <StyledSectionCompetencias>
              <div className="Front">
                <p>Front-End</p>
                <div className="BarraNvF">
                  <p className="nivel2F"></p>
                  <p className="nivel2F"></p>
                  <p className="nivel2F"></p>
                </div>
              </div>
              <div className="React">
                <p className="BarraNvR">React</p>
                <div>
                  <p className="nivel1R"></p>
                  <p className="nivel2R"></p>
                  <p className="nivel2R"></p>
                </div>
              </div>
              <div className="Back">
                <p>Back-End</p>
                <div className="BarraNvB">
                  <p className="nivel2R"></p>
                  <p className="nivel2R"></p>
                  <p className="nivel2R"></p>
                </div>
              </div>
            </StyledSectionCompetencias> */}
            <ul className="animate__animated animate__lightSpeedInLeft">
              <li>
                <p className="ReactIMG"></p>
              </li>
              <li>
                <p className="JSIMG"></p>
              </li>
              {/* <li>
                <p className="SQL"></p>
              </li> */}
              <li>
                <p className="HTML5IMG"></p>
              </li>
              <li>
                <p className="NODEIMG"></p>
              </li>
              <li>
                <p className="CIMG"></p>
              </li>
              <li>
                <p className="JAVAIMG"></p>
              </li>
              <li>
                <p className="CSSIMG"></p>
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
                  <a
                    target="_blank"
                    href="https://react-entrega-template-hamburgueria-da-kenzie-guscarraro.vercel.app/"
                  >
                    Acesse o site aqui!
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-template-hamburgueria-da-kenzie-guscarraro"
                  >
                    Repositorio GitHub!
                  </a>
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
                    <a
                      target="_blank"
                      href="https://react-entrega-s1-template-nu-kenzie-guscarraro-7jv1ilj5s.vercel.app/"
                    >
                      Acesse o site aqui!
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-guscarraro"
                    >
                      Repositorio GitHub!
                    </a>
                  </p>
                </div>
              </li>
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
                  <a
                    target="_blank"
                    href="https://home-you-kenzie-m3-nmw9ui2bi-guscarraro-hotmailcom.vercel.app/"
                  >
                    Acesse o site aqui!
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/HomeYou-Kenzie-Academy-t15-g4/HomeYou-Kenzie-m3"
                  >
                    Repositorio GitHub!
                  </a>
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
