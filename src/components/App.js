import React, { Component } from 'react';
import Projects from './Projects';
import Profiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';

class App extends Component {
    state = { displayBio: false };
    // constructor(){
    //     super();
    //     this.state = { displayBio: false };

    //     this.toggleDisplay = this.toggleDisplay.bind(this);
    // }

    toggleDisplay = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Ehtisham. </p>
                <Title /> 
            { 
                this.state.displayBio ? ( 
                    <div>
                        <p>I live in lahore and code every day</p>
                        <button onClick={this.toggleDisplay}>
                            Show less
                        </button>
                    </div>
                 ) : (
                     <div>
                        <button onClick={this.toggleDisplay}>
                            Read More
                        </button>
                     </div>
                 )
            }
            <hr />
            <Projects />
            <hr />
            <Profiles />
            </div>
        )
    }
}

export default App;
