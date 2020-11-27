import React from "react";
import LiNav from "../foundation/LiNav";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { GoMail } from "react-icons/go";

import { Container, Title, NavButtons, NavList, BtnGithub, BtnEmail } from "./styled";

const Nav = () => {
  return (
    <Container>
      <Title>
        <strong>Cigoli</strong> Developer
      </Title>

      <NavList>
        <LiNav text="Sobre" link="about" />

        <LiNav text="Experiência" link="experience" />

        <LiNav text="Formação" link="formation" />

        <LiNav text="Contato" link="contact" />
      </NavList>

      <NavButtons>

        <Link href="https://github.com/JeanCigoli" passHref>
          <BtnGithub>
            <DiGithubBadge />

            <a>GitHub</a>
          </BtnGithub>
        </Link>

        <Link href="mailto:jeancigoli30@gmail.com" passHref>
          <BtnEmail>
            <a><GoMail /></a>
          </BtnEmail>
        </Link>

      </NavButtons>
    </Container>
  );
};

export default Nav;
