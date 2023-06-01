import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { locationsList } from "../actions/pokemonsActions";
import { Button, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AkordeonLokalizacja from "../components/Akordeon";

function Locations() {
	const dispatch = useDispatch();

	const locationsListState = useSelector((state) => state.locationsList);
	const { locations } = locationsListState;

	useEffect(() => {
		dispatch(locationsList());
	}, [dispatch]);

	console.log(locations);

	return (
		<div className="mx-32 my-16">
            <h1 className="text-3xl my-12 text-center">Lokalicje wraz z jej mieszkańcami: </h1>
			{locations.map((locat) => (
				<AkordeonLokalizacja location={locat} />
			))}
		</div>
	);
}

export default Locations;
