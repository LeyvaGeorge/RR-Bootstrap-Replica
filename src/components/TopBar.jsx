import { Navbar, Button, Nav } from "react-bootstrap"
import instacardLogoSVG from'../logo.svg'

export default function TopBar() {
    return <Navbar bg="light" expand = 'lg' fixed="top">
        <Navbar.Brand
            style={
                {
                    magin: '5px 0 0 20px'
                }
            }
            href="#home"
        >
            <img src={instacardLogoSVG} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ='mr-auto'></Nav>
            <Nav>
                <Nav.Link href="#Login">Log In</Nav.Link>
                <Button variant="success">Sign Up</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}