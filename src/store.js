import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { pokemonsListReducers, locationsListReducers } from './reducers/pokemonsReducers'


const reducer = combineReducers({
    pokemonsList: pokemonsListReducers,
    locationsList: locationsListReducers
})



const middleware = [thunk]

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store