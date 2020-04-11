import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export const LINK = {
    home: "/",
    twitterTweet: "/twitter/tweet"
};

export default function NavMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={LINK.home}>Fake Screenshot Generator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={LINK.home}>Home</Nav.Link>
                    <NavDropdown title="Twitter" id="basic-nav-dropdown">
                        <NavDropdown.Item href={LINK.twitterTweet}>Tweet</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}