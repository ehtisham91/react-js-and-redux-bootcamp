import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings'

const Instructions = props => {
    const { InstructionsExpanded, expandInstructions, collapseInstructions } = props;
    console.log('instructionsExpanded', InstructionsExpanded )
    if (InstructionsExpanded){
        return (
            <div>
                <h3>
                    Instructions
                </h3>
                <p> Welcome to evens or odds </p>
                <p> The deck is shuffeled. Then choose: will the next vcard be even or odd? </p>
                <p> Make choice on every dram and see how many you get right </p>
                <p> Face cards dont count </p>
                <br />
                <button onClick={ collapseInstructions }>
                    Show less
                </button>
            </div>
        );
    }
    return (
        <div>
            <h3> Instructions </h3>
            <p> Welcome to evens or odds. The game goes like thiss </p>
            <button onClick={ expandInstructions }> Read more </button>
        </div>
    )
}



const mapDispatchToProps = dispatch => {
    return { 
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions()) 
     };
}


// const mapStateToProps = state => {return { InstructionsExpanded: state.instructionsExpanded }}
// const ComponentConnector = connect(mapStateToProps, mapDispatchToProps);

// export default ComponentConnector(Instructions);

export default connect(
    state => ({ InstructionsExpanded: state.settings.instructionsExpanded })
    , mapDispatchToProps)(Instructions);
