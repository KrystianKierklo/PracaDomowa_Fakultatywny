import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';

function Header() {
	return (
		<header className="text-2xl">
			<Navbar variant="dark" expand="lg" collapseOnSelect className="navbar">
				<Container fluid>
					<Navbar.Brand href="/">
						<span className="text-3xl">UWMEDIC</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="flex justify-between mx-12">
						<Nav className="grid gap-3">
							<Nav.Link>Specjaliści</Nav.Link>
							<Nav.Link>Dolegliwości</Nav.Link>
							<Nav.Link>FAQ</Nav.Link>
							<Nav.Link>Kontakt</Nav.Link>
						</Nav>

                        <Nav>
                            <Nav.Link><Button variant="light">Logowanie</Button></Nav.Link>
                            <Nav.Link><Button variant="outline-light">Rejestracja</Button></Nav.Link>
                        </Nav>

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
