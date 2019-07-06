import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import { fetchNewDeck } from '../actions/deck';
import DrawCard from './DrawCrad';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck()
    }

    // cancelGame = () => {
    //     this.props.dispatch(cancelGame());
    // }

    render() {
        console.log('this', this);

        if (this.props.fetchState ===fetchStates.error){
            return (
                <div>
                    <p>An error occured</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }

        return (
            <div>
               <h2>
               ♠️ EVENS OR ODDS ♠️
               </h2>
               {
                   this.props.gameStarted ? (
                       <div>
                           <h3>This game is on!</h3>
                           <GameState />
                           <br />
                           <Guess />
                           <br />
                           <DrawCard />
                           <hr />
                           <Card />
                           <hr />
                           <button onClick={this.props.cancelGame}>
                               Cancel Game
                           </button>
                        </div>
                   ) : (
                        <div>
                           <h3> A new game awaits </h3>
                            <br />
                            <button onClick={this.startGame}> 
                                Start Game 
                            </button>
                            <hr />
                            <Instructions />
                        </div>
                   )
               }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('App state', state);

    // const { gameStarted } = state.settings;
    // const { fetchState, message } = state.deck;

    const {
        settings: { gameStarted },
        deck: { fetchState, message }
    } = state ;

    return { gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//     return { 
//        startGame: () => dispatch(startGame()),
//        cancelGame: () => dispatch(cancelGame()),
//        fetchNewDeck: () => fetchNewDeck(dispatch)
//      };
// }


const ComponentConnector = connect(mapStateToProps, 
    { startGame, cancelGame, fetchNewDeck });


export default ComponentConnector(App);
