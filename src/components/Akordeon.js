import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function AkordeonLokalizacja({ location }) {
	return (
		<Accordion className="text-center">
			<Accordion.Item eventKey="0">
				<Accordion.Header>{location.name}</Accordion.Header>
				<Accordion.Body className="cialo">
					{location.residents.map((ludzik, index) => (
						<span className="spacje">{ludzik.name}</span>
					))}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default AkordeonLokalizacja;
