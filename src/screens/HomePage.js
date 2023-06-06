import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { pokemonsList } from "../actions/pokemonsActions";
import PokemonCard from "../components/Card";
import { Button, Row, Col } from "react-bootstrap";
import {Toaster, toast} from 'react-hot-toast'

function HomePage() {
	const dispatch = useDispatch();

	const pokemonsListState = useSelector((state) => state.pokemonsList);
	const { pokemons } = pokemonsListState;

	
	useEffect(() => {
		dispatch(pokemonsList());
		toast.success('Witaj na naszej stronie')
	}, [dispatch]);

	return (
		<div className="text-4xl text-center underline mt-5">
			<div><Toaster/></div>
			<h1>Lista naszych pacjentów: </h1>
			<a className="my-3" href="/admin/pokomonsList"><button className="my-3 py-2 przycisk">Szczegóły pacjentów</button></a>
			<a className="my-3 ml-16" href="/locations"><button className="my-3 py-2 przycisk">Lokalizacje</button></a>
			<Row className="mx-5">
				{pokemons?.map((pok) => (
					<Col key={pok?.id} sm={12} md={6} lg={4} xl={3}>
						<PokemonCard pokemon={pok} />
					</Col>
				))}
			</Row>
		</div>
	);
}
export default HomePage;
