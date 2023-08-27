'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

const AppHeader = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link className={'navbar-brand'} href="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={'nav-link'} href="/facebook">Facebook</Link>
                        <Link className={'nav-link'} href="/tiktok">Tiktok</Link>
                        <Link className={'nav-link'} href="/youtube">Youtube</Link>
                        {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default AppHeader;
