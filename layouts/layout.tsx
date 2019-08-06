import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
        <Navbar.Brand onClick={() => navigate('/')} href="#">Parqueadero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate('/ingreso')} href="#">Ingreso</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link target="_blank" href="https://twitter.com/williamsantc" className="custom-nav-link">Follow Me!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;