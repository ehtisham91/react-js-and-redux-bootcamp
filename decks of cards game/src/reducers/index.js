import { combineReducers } from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import gameStateReducer from './gameState';

export default combineReducers({ 
    deck: deckReducer,
    settings: settingsReducer,
    gameState: gameStateReducer
});