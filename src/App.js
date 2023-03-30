import styled from "styled-components";
import "animate.css";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  color: #d8d8d8;
  font-size: xx-large;

  .opaco {
    opacity: 0.7;
  }
`;
export const ContainerGeral = styled.div`
  width: 70%;

  .NomeCity {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    background-color: black;
    border-radius: 20px;
    opacity: 0.9;
  }
`;
export const StyledDivDescription = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 25px;
  background-color: black;
  border-radius: 20px;
  opacity: 0.9;
  gap: 30px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
  p {
    width: 100%;
    font-size: large;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p.Description {
    font-size: xx-large;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledGitHub = styled.a`
  /* background-color: red; */
  background-image: url("../src/assets/icons8-github-128 (1).png");
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
  background-size: 100% 100%;
`;

export const StyledLinkedin = styled.a`
  /* background-color: red; */
  background-image: url("../src/assets/icons8-linkedin-128.png");
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
  background-size: 100% 100%;
`;
export const StyledSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url("../src/assets/gifSiteProprio.gif");
  background-repeat: no-repeat;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: 100% 100%;
`;
export const StyledSection2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url("../src/assets/4krosaAzul.gif");
  /* background-color: black; */
  background-repeat: no-repeat;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: 100% 100%;
`;
export const SectionSkill = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  width: 100%;
  height: 60vh;
  position: relative;
  background-size: 100% 100%;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    background-color: rgba(0, 255, 240, 0.5);
    margin-top: 10px;
    font-size: x-large;
    padding: 10px;
    border-radius: 20px;
    color: black;
  }

  ul {
    width: 100%;
    margin-top: 10%;
    /* background-color: rgba(0, 255, 240, 0.5); */
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    justify-content: space-around;
    align-items: center;
  }
  li {
    list-style: none;
    img {
      width: 90px;
      height: 90px;
    }
    .NODEIMG {
      background-image: url("../src/assets/node.svg");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }

    .NODEIMG:hover {
      background-image: url("../src/assets/node-js.svg");
    }
    .ReactIMG:hover {
      background-image: url("../src/assets/reactHOVER.png");
    }
    .CIMG {
      background-image: url("../src/assets/c2.png");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    .CIMG:hover {
      background-image: url("../src/assets/c.png");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    .CSSIMG {
      background-image: url("../src/assets/icons8-css3.svg");
      /* background-color: black; */
      /* color: ; */
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    .CSSIMG:hover {
      background-image: url("../src/assets/icons8-css3-144.png");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    .JAVAIMG {
      background-image: url("../src/assets/java1.png");
      /* background-color: black; */
      /* color: ; */
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    .JAVAIMG:hover {
      background-image: url("../src/assets/java3.png");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    /* .SQL {
      background-image: url("../src/assets/icons8-mysql-100.png.png");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    }
    .SQL:hover {
      background-image: url("../src/assets/icons8-mysql-100.png (1).png");
      width: 90px;
      height: 90px;
      position: relative;
      background-size: 100% 100%;
    } */
  }

  .ReactIMG {
    background-image: url("../src/assets/icons8-react-96.png");
    /* background-color: black; */
    /* color: ; */
    width: 90px;
    height: 90px;
    position: relative;
    background-size: 100% 100%;
  }

  .JSIMG {
    background-image: url("../src/assets/icons8-javascript.svg");
    /* background-color: black; */
    /* color: ; */
    width: 90px;
    height: 90px;
    position: relative;
    background-size: 100% 100%;
  }
  .JSIMG:hover {
    background-image: url("../src/assets/icons8-javascript-96.png");
  }
  .HTML5IMG {
    background-image: url("../src/assets/icons8-html-96.png");
    width: 90px;
    height: 90px;
    position: relative;
    background-size: 100% 100%;
  }
  .HTML5IMG:hover {
    background-image: url("../src/assets/icons8-html-96 (2).png");
  }
`;
export const StyledWhats = styled.a`
  /* background-color: red; */
  background-image: url("../src/assets/zap2.png");
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  background-size: 100% 100%;
`;
export const StyledDivPessoal = styled.div`
  display: flex;
  gap: 20px;
  background-color: #00fff0;
  opacity: 0.5;
  padding: 5px;
  border-radius: 20px;
`;

export const StyledProject = styled.div`
  color: white;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  border-radius: 20px;
  opacity: 0.9;
`;
// export const StyledSectionCompetencias = styled.main`
//   width: 70%;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   .Front {
//     border: solid 1px black;
//     display: flex;

//     align-items: flex-start;
//     width: 100%;
//     height: 30px;
//     div {
//       background: none;
//     }
//   }
//   .Back {
//     border: solid 1px black;
//     display: flex;
//     align-items: center;
//     align-items: flex-start;
//     width: 100%;
//     height: 30px;
//     div {
//       background: none;
//     }
//   }
//   .React {
//     border: solid 1px black;
//     display: flex;
//     align-items: center;
//     align-items: flex-start;
//     width: 100%;
//     height: 30px;
//     div {
//       background: none;
//     }
//   }
//   p {
//     background: none;
//   }
// `;
export const StyledHeader = styled.header`
  height: 60%;
  width: 100px;
  border-radius: 20px;
  padding: 0;
  color: white;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: black;
  opacity: 0.8;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  img {
    width: 100px;
    height: 100px;
  }

  .fake:hover {
    /* background-image: url("../src/assets/icons8-github-128 (3).png"); */
    width: 50px;
    height: 50px;
  }
  .link:hover {
    background-image: url("../src/assets/LI2.png");
    width: 50px;
    height: 50px;
  }
  .whats:hover {
    background-image: url("../src/assets/zap1.png");
    width: 40px;
    height: 40px;
  }
`;
export const StyledDivCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  padding: 0;
  ul {
    padding: 0;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 20px;
    opacity: 0.9;

    /* flex-wrap: wrap; */
    z-index: 1000;
    .ProjetosP {
      width: 100%;
      padding: 20px;
    }

    .StyledHamburgueria {
      list-style: none;
      position: relative;
      width: 270px;
      height: 340px;
      margin: 10px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.9);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      background-image: url("../src/assets/BurguerKenzie.png");
      background-size: 200% 100%;

      opacity: 0.5;

      div {
        padding: 20px;
        text-align: center;
        transform: translateY(100px);
        opacity: 0;
        transition: 1s;

        h4 {
          color: black;
        }

        h3 {
          position: absolute;
          top: -150px;
          right: 20px;
          font-size: 8rem;
          color: white;
          opacity: 0.2;
        }
      }
    }
    .StyledHamburgueria:hover {
      background: rgba(255, 255, 255, 0.9);
      opacity: 1;
      div {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    .StyledNuKenzie {
      list-style: none;
      position: relative;
      width: 270px;
      height: 340px;
      margin: 10px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.9);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      background-image: url("../src/assets/NuKenzie.png");
      background-size: 200% 100%;

      opacity: 0.5;

      div {
        padding: 20px;
        text-align: center;
        transform: translateY(100px);
        opacity: 0;
        transition: 1s;

        h4 {
          color: black;
        }

        h3 {
          position: absolute;
          top: -150px;
          right: 20px;
          font-size: 8rem;
          color: white;
          opacity: 0.2;
        }
      }
    }
    .StyledNuKenzie:hover {
      background: rgba(255, 255, 255, 0.9);
      opacity: 1;
      div {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    .StyledHomeYou {
      list-style: none;
      position: relative;
      width: 270px;
      height: 340px;
      margin: 10px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.9);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      background-image: url("../src/assets/HomeYou.png");
      background-size: 200% 100%;

      opacity: 0.5;

      div {
        padding: 20px;
        text-align: center;
        transform: translateY(100px);
        opacity: 0;
        transition: 1s;

        h4 {
          color: black;
        }

        h3 {
          position: absolute;
          top: -150px;
          right: 20px;
          font-size: 8rem;
          color: white;
          opacity: 0.2;
        }
      }
    }
    .StyledHomeYou:hover {
      background: rgba(255, 255, 255, 0.9);
      opacity: 1;
      div {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    p {
      font-size: small;
      color: black;
    }
    a {
      font-size: small;
      position: relative;
      display: inline-block;
      padding: 8px 20px;
      margin-top: 20px;
      background-color: white;
      color: black;
      text-decoration: none;
      border-radius: 20px;
      font-weight: 500;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
    }
  }
`;
