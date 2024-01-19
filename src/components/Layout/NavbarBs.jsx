import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBs() {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", onScroll);
  return (
    <Navbar fixed='top' expand="lg" className={`navbar-dark ${scrolled ? "bg-black" : "py-4"}`}>
      <Container>
        <Navbar.Brand as={'h1'} href="#home"><span className='fst-italic'>FI</span>Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#populer">Populer</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBs;