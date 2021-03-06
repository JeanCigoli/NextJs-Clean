import React from "react";
import { H1 } from "../foundation/Title";
import Paragraph from "../foundation/Paragraph";
import { DiReact, DiNodejsSmall, DiGit } from "react-icons/di";
import {
  Container,
  ContainerText,
  ContainerImage,
  Image,
  TextDev,
  OneCircle,
  TwoCircle,
  ThreeCircle,
} from "./styled";

const Header = () => {
  return (
    <Container>
      <ContainerText>
        <TextDev>FullStack Developer</TextDev>

        <H1
          textAlign="left"
          text="Encontre a oportunidade perfeita para montar seu negócio"
          fontSize="large"
          color="white"
        />

        <Paragraph
          fontSize="default"
          text="Crie projetos simples e únicos de modo fácil e rápido."
          textAlign="left"
          color="whiteOpacity"
        />
      </ContainerText>

      <ContainerImage>
        <OneCircle width="100px" height="100px">
          <DiReact />
        </OneCircle>

        <TwoCircle width="200px" height="200px">
          <DiNodejsSmall />
        </TwoCircle>

        <ThreeCircle width="70px" height="70px">
          <DiGit />
        </ThreeCircle>

        <Image
          src="/assets/logoLight.png"
          alt="Logo do site Cigoli Developer"
          unsized
        />
      </ContainerImage>
    </Container>
  );
};

export default Header;
