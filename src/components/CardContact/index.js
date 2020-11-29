import React from 'react';
import Paragraph from '../foundation/Paragraph';
import Link from 'next/link';
import { Container } from './styled';

const CardContact = ({ icon, text, href }) => {
  return (
    <Container>
      
      { icon }

      <Link href={href}>

        <a target='_blank'>
          <Paragraph 
            text={text}
            color='white'
            fontSize='default'
          />
        </a>

      </Link>

    </Container>
  );
}

export default CardContact;