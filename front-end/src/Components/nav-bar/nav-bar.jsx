import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
export default class NavBar extends Component {
    state = {};

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Petatí</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Início</Nav.Link> 
                    <Nav.Link href="/search">Buscar</Nav.Link>
                    <Nav.Link href="/about">Sobre</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
