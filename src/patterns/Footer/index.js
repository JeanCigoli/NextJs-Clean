import React from "react";
import Paragraph from "../../components/foundation/Paragraph";
import { getFullYear } from "../../utils";
import { Container, Main, Separate, Title, Icon } from "./styled";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <Main>
        <Separate width="60%" justify="flex-start">
          <Title>
            <strong>Cigoli</strong> Developer
          </Title>

          <Paragraph
            text={`${getFullYear()}. Todos os direitos reservados`}
            color="whiteOpacity"
            fontSize="small"
          />
        </Separate>

        <Separate width="40%" justify="center">
          <Icon>
            <Link href="https://github.com/JeanCigoli" passHref>
              <a target="_blank">
                <FaGithub />
              </a>
            </Link>
          </Icon>

          <Icon>
            <Link href="https://www.facebook.com/jean.cigoli" passHref>
              <a target="_blank">
                <FaFacebookF />
              </a>
            </Link>
          </Icon>

          <Icon>
            <Link href="https://www.linkedin.com/in/jean-cigoli-de-almeida-062856180/" passHref>
              <a target="_blank">
                <FaLinkedinIn />
              </a>
            </Link>
          </Icon>
        </Separate>
      </Main>
    </Container>
  );
};

export default Footer;
