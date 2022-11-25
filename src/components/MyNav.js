import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNav = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My-React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="standard" id="basic-nav-dropdown">
                <NavDropdown.Item href="/bisection">Bisection</NavDropdown.Item>
                <NavDropdown.Item href="/falseposition">FalsePosition</NavDropdown.Item>
                <NavDropdown.Item href="/onepoint">Onepoint Iteration</NavDropdown.Item>
                <NavDropdown.Item href="/newtonraphson">NewtonRaphson</NavDropdown.Item>
                <NavDropdown.Item href="/secant">Secant</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="matrix" id="basic-nav-dropdown">
                <NavDropdown.Item href="/gauss">Gauss</NavDropdown.Item>
                <NavDropdown.Item href="/cramer">Cramer</NavDropdown.Item>
                <NavDropdown.Item href="/jacobi">Jacobi</NavDropdown.Item>
                <NavDropdown.Item href="/seidel">Seidel</NavDropdown.Item>
                <NavDropdown.Item href="/conjugate">Conjugate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/tests">Test</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default MyNav;