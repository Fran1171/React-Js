import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./images/logodiaz.png";
import "../NavBar/navBar.css";

function NavBar() {
  return (
    <>
      <Navbar className="bg-navbar" expand="lg">
        <Container fluid="sm">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand ms-3">
              <img
                src={Logo}
                alt="logo"
                className="logo__img--center wow animate__animated animate__flipInX"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/"
                  className="text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  data-wow-delay="0.2s"
                >
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/nosotros"
                  className="text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  data-wow-delay="0.3s"
                >
                  Nosotros
                </Link>
              </Nav.Link>

              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item className="hoverOpciones">
                  <Link
                    to="/productos/indumentaria"
                    className="text-decoration-none text-white"
                  >
                    Indumentaria
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="hoverOpciones">
                  <Link
                    to="/productos/accesorios"
                    className="text-decoration-none text-white"
                  >
                    Accesorios
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="hoverOpciones">
                  <Link
                    to="/productos/cosmeticos"
                    className="text-decoration-none text-white"
                  >
                    Cosmeticos
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link
                  to="/galeria"
                  className="text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  data-wow-delay="0.6s"
                >
                  Galer??a
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/contacto"
                  className="text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  data-wow-delay="0.6s"
                >
                  Contacto
                </Link>
              </Nav.Link>

              <Nav.Link id="IdCart">
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
