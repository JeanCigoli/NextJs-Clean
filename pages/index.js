import Head from '../src/infra/components/Header';
import { Container } from './_styled';
import Header from '../src/patterns/Header';
import About from '../src/patterns/About';

const Home = () => {
  return (
    <Container>
      <Head title='Jean Cigoli - Dev.' />
      <Header />
      <About />
    </Container>
  )
};

export default Home;
