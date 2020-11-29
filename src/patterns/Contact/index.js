import React from "react";
import { Container, Main, Separate, SocialContainer, Icon } from "./styled";
import { H2 } from "../../components/foundation/Title";
import Paragraph from "../../components/foundation/Paragraph";
import Card from "../../components/CardContact";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Form from '../../components/Form';

const Contact = () => {
  return (
    <Container>
      <Main>
        <Separate align="flex-start" justify="flex-start">
          <H2
            textAlign="left"
            text="Entre em contato conosco"
            color="white"
            fontSize="large"
          />

          <Paragraph
            fontSize="default"
            text="Mande sua dúvida, irei responder o mais rápido possível!"
            color="whiteOpacity"
          />

          <Card
            icon={<HiMail />}
            text="jeancigoli30@gmail.com"
            href="mailto:jeancigoli30@gmail.com"
          />

          <Card
            icon={<HiPhone />}
            text="+55 11 99605-9255"
            href="tel:+55 11 99605-9255"
          />

          <SocialContainer>
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
              <Link
                href="https://www.linkedin.com/in/jean-cigoli-de-almeida-062856180/"
                passHref
              >
                <a target="_blank">
                  <FaLinkedinIn />
                </a>
              </Link>
            </Icon>
          </SocialContainer>
        </Separate>

        <Separate align="center" justify="center" padding='0 30px'>

          <Form />

        </Separate>
      </Main>
    </Container>
  );
};

export default Contact;
