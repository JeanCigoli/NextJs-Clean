import React from "react";
import Card from "../../components/CardAbout";
import { Container, Main, Separate, TextDev } from "./styled";
import { FaCode } from 'react-icons/fa';
import { AiFillLayout } from 'react-icons/ai';
import { DiDatabase } from 'react-icons/di';

import { H1 } from '../../components/foundation/Title';
import Paragraph from '../../components/foundation/Paragraph';

const About = () => {
  return (
    <Container id='about'>
      <Main>
        <Separate align='center' justify='space-between' padding='0'>

          <Card 
            title='Front-end'
            text='I develop front-end with coding super smooth'
            icon={<FaCode />}
          />

          <Card 
            title='Back-end'
            text='Boost your business with SEO optimise'
            icon={<DiDatabase />}
          />

          <Card 
            title='Design'
            text='Create digital products with unique ideas'
            icon={<AiFillLayout />}
          />

        </Separate>

        <Separate align='flex-start' justify='center' padding='0 60px'>

          <TextDev>
            Introdução
          </TextDev>

          <H1 
            color='white'
            fontSize='xLarge'
            text='Olá! Eu sou o Jean Cigoli'
          />

          <Paragraph
            text='Um tempo atrás me apaixonei pela área de tecnologia e desenvolvimento de sistemas, pois se trata de uma área de constante evolução, trazendo sempre coisas novas para se aprender. Hoje estou cursando Sistema de informação – Bacharel, e me formei recentemente no curso técnico de Análise e desenvolvimento de Sistema pela instituição SENAI "Professor Vicente Amato".'
            textAlign='left'
            color='whiteOpacity'
            fontSize='default'
          />

        </Separate>
      </Main>
    </Container>
  );
};

export default About;
