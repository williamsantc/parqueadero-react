import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Head>
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
      <style jsx={true} global={true}>{`
        body {
          font-family: "Raleway", sans-serif;
        }

        .app {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          min-height: 90vh;
        }

        .logo {
          width: 30%;
          height: 30%;
        }

        .custom-nav-link {
          color: var(--primary) !important;
          text-decoration: none;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Layout;