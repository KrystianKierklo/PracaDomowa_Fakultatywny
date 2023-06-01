import axios from "axios";
import {
	POKEMONS_LIST_FAIL,
	POKEMONS_LIST_REQUEST,
	POKEMONS_LIST_SUCCESS,
	LOCATIONS_LIST_FAIL,
	LOCATIONS_LIST_REQUEST,
	LOCATIONS_LIST_SUCCESS,
} from "../constants/pokemonsConstants";

export const pokemonsList = () => async (dispatch) => {
	try {
		dispatch({ type: POKEMONS_LIST_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post(
			`https://rickandmortyapi.com/graphql`,
			{
				query: `
                    query{
                        characters{
                            results{
                                id
                                name
                                image
								status
								created
                            }
                        }
                    }
                `,
			},
			config
		);

		dispatch({
			type: POKEMONS_LIST_SUCCESS,
			payload: data.data.characters.results,
		});
	} catch (error) {
		dispatch({ type: POKEMONS_LIST_FAIL, payload: "Błędnie załadowano dane" });
	}
};

export const locationsList = () => async (dispatch) => {
	try {
		dispatch({ type: LOCATIONS_LIST_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post(
			`https://rickandmortyapi.com/graphql`,
			{
				query: `
                    query{
                        locations{
							results{
								name
								id
								residents{
									name
								}
					
							}
						}
                    }
                `,
			},
			config
		);

		dispatch({
			type: LOCATIONS_LIST_SUCCESS,
			payload: data.data.locations.results,
		});
	} catch (error) {
		dispatch({ type: LOCATIONS_LIST_FAIL, payload: "Błędnie załadowano dane" });
	}
};
