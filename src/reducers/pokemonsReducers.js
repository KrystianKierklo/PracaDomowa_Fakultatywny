import {POKEMONS_LIST_FAIL, POKEMONS_LIST_REQUEST, POKEMONS_LIST_SUCCESS, LOCATIONS_LIST_FAIL, LOCATIONS_LIST_REQUEST, LOCATIONS_LIST_SUCCESS} from '../constants/pokemonsConstants'


export const pokemonsListReducers = (state = { pokemons: [] }, action) => {
	switch (action.type) {
		case POKEMONS_LIST_REQUEST:
			return { loading: true, pokemons: [] };

		case POKEMONS_LIST_SUCCESS:
			return {
				loading: false,
				pokemons: action.payload,
			};

		case POKEMONS_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};


export const locationsListReducers = (state = { locations: [] }, action) => {
	switch (action.type) {
		case LOCATIONS_LIST_REQUEST:
			return { loading: true, locations: [] };

		case LOCATIONS_LIST_SUCCESS:
			return {
				loading: false,
				locations: action.payload,
			};

		case LOCATIONS_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};