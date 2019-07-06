import React from 'react';
import { connect } from 'react-redux';
// import { fetchDrawCard } from '../actions/deck'

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if (correctGuesses > record){
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);
        return { record: correctGuesses, isNewRecord: true };
    }
    return { record, isNewRecord:false };
};

const GameState = ({ remaining, correctGuesses }) => {
    
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses' ;

    const { record, isNewRecord } = checkRecord(correctGuesses);

    const recordLabel = isNewRecord ? '🥳 New Record': 'Record';

    return (
        <div>
        <h3> {recordLabel}: {record} </h3>
            <p>{remaining} cards Remaining </p>
            <p>{correctGuesses} correct {guessText} </p>
        </div>
    );
}

// const mapDispatchToProps = dispatch => {
//     return { 
//         fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
//      };
// }

export default connect(
    ({  deck: {remaining},
        gameState: { correctGuesses }
    }) => ({ remaining, correctGuesses})
)(GameState);