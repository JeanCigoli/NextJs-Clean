import Head from '../src/infra/components/Header';
import Header from '../src/patterns/Header';
import About from '../src/patterns/About';
import Projects from '../src/patterns/Projects';
import Contact from '../src/patterns/Contact';
import Footer from '../src/patterns/Footer';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: auto;
`;

const Home = () => {
  return (
    <Container>
      <Head title='Jean Cigoli - Dev.' />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
};

export default Home;
