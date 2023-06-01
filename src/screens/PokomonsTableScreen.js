import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { pokemonsList } from "../actions/pokemonsActions";
import PokemonCard from "../components/Card";
import { Button, Row, Col, Table, Image } from "react-bootstrap";

function PokomonsTableScreen() {
	const dispatch = useDispatch();

	const pokemonsListState = useSelector((state) => state.pokemonsList);
	const { pokemons } = pokemonsListState;

	useEffect(() => {
		dispatch(pokemonsList());
	}, [dispatch]);

	return (
		<div className="mx-32">
            <h1 className="text-3xl text-center my-3">Widok ze szczegółami naszych pacjentów: </h1>
			<Table striped hover responsive className="table-sm mb-5 px-16">
				<thead className="text-center">
					<tr>
						<th></th>
						<th>Name</th>
						<th>Image</th>
						<th>Created</th>
						<th>Alive</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{pokemons.map((poke, index) => (
						<tr key={poke?.id}>
							<td>{index + 1}</td>
							<td>{poke?.name}</td>
							<td>
								<Image
									className="max-h-28 mx-auto d-block"
									src={poke?.image}
									alt={poke?.name}
								/>
							</td>
							<td>{poke?.created}</td>
							<td>
								{poke?.status === "Alive" ? (
									<i class="fa-solid fa-circle-check text-lime-500"></i>
								) : (
									<i class="fa-solid fa-circle-minus text-red-500"></i>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default PokomonsTableScreen;
