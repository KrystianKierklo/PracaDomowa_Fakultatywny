import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function PokemonCard({ pokemon }) {
	const [hoveredItemId, setHoveredItemId] = useState(null);

	const handleItemMouseEnter = (itemId) => {
		setHoveredItemId(itemId);
	};

	const handleItemMouseLeave = () => {
		setHoveredItemId(null);
	};

	return (
		<Card
			className="my-3 rounded ramka"
			onMouseEnter={() => handleItemMouseEnter(pokemon?.id)}
			onMouseLeave={handleItemMouseLeave}
		>
			{pokemon.id == hoveredItemId ? <div className="centering"></div> : null}
			<Card.Img
				className={`scale-90 max-h-96 ${
					pokemon.id == hoveredItemId ? "opacity-80" : null
				}`}
				src={`${pokemon?.image}`}
			/>

			<Card.Body>
				<Card.Title className="text-center">
					<strong>{pokemon?.name}</strong>
				</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default PokemonCard;
