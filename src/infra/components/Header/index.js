import React from 'react'
import NextHead from 'next/head'

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>
        {title}
      </title>

      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500;700&display=swap" rel="stylesheet"></link>

      <meta name="description" content="Desenvolvedor Front-end e Back-end, Criações de sites, Currículo pessoal" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="Desenvolvedor, Desenvolvedor Jean Cigoli, Jean Cigoli, Cigoli, Criação de Sites" />
      <meta name="DC.Suject" content="Desenvolvedor, Desenvolvedor Jean Cigoli, Jean Cigoli, Cigoli, Criação de Sites" />
      <meta name="rating" content="general" />
      <meta name="author" content="Jean Cigoli de Almeida"/>
      <meta name="copyright" content="© 2020 Cigoli" />
      <meta name="DC.creator " content="Jean Cigoli de Almeida" />
      <meta name="DC.creator.address" content="jeancigoli30@gmail.com" />
      <meta name="Custodian" content="Jean Cigoli de Almeida" />
      <meta name="DC.Identifier" content="http://jeancigoli.vercel.app/"></meta>
    </NextHead>
  )
};

export default Head;