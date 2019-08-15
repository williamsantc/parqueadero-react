import { Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { mapStateToProps, dispatchProps, StateProps } from "../store";

const AppNavbar: React.FC<StateProps> = ({tickets}) => {
    const router = useRouter();
    const navigate = (route: string) => {
        router.push(route);
    };
    return (
        <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
            <Navbar.Brand onClick={() => navigate('/')} href="#">Parqueadero</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate('/ingreso')} href="#">Ingreso</Nav.Link>
                </Nav>
                <Nav className="ml-auto align-items-center">
                    <span className="navbar-text mr-md-2">{tickets.length} Vehiculos</span>
                    <Nav.Link target="_blank" href="https://twitter.com/williamsantc" className="custom-nav-link">Follow Me!</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default connect(mapStateToProps)(AppNavbar);