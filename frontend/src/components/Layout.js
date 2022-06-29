import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>{children}</Container>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
