import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import Logo from "../Images/Logo.png"

const Navigation = () => {
    return(
        <>
            <Navbar className = "nav-link text-bg-danger text-uppercase " collapseOnSelect expand="md" variant="dark" >
                <Container className="container">
                    <Navbar.Brand href="/">
                        <img src={Logo} width="50" height="50" alt="Logo" className=" rounded-5"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="nav-link ms-auto px-5">
                            <Link className="nav-link text-white " to="/">Home</Link>
                            <Link className="nav-link text-white" to="/newCollection" >New Collection</Link>
                            <Link className="nav-link text-white" to="/summer" >Summer</Link>
                            <Link className="nav-link text-white" to="/discount">Discount%</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
}
export default Navigation;
