import React from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Container } from "./styled";

const LiNav = ({ text, link }) => {
  return (
    <Container>

      <FaChevronLeft />

      <Link href={`#${link}`} passHref>
        <a>{text}</a>
      </Link>
      
      <FaChevronRight />
      
    </Container>
  );
};

export default LiNav;
