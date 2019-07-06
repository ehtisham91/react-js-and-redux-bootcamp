import React from 'react';
import { connect } from 'react-redux';

const Card = ({ cards }) => {
    if (!cards) return null;

    if (!cards[0]) return null;

    const { value, suit, image } = cards[0];

    // const { value, suit, image } = undefined;

    // const value = undefine

    return (
        <div>
            <h3>
                {value} of {suit}
            </h3>
                <img src={image} alt='card-image' />
        </div>
    )
}

export default connect(
    ({ deck: {cards} }) => ({ cards })
)(Card);