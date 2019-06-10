import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

class Profile extends Component{
    render(){
        const { image,  link } = this.props.profile;

        return (
            <div style={{ display: 'inline-block', textAlign:"center"}}>
                <span >
                <a href={link}>
                    <img src={image} alt='profile' style={{ width:35, height:35, margin:10}} />
                </a>
            </span>
                </div>
        )
    }
} 

class Profiles extends Component {
    render() {
        return(
            <div>
              <h2> Profiles </h2>
              <div>
                {
                    SOCIAL_PROFILES.map(
                        PROFILE => {
                            return (
                                <Profile key={PROFILE.id} profile={PROFILE} />
                            )
                        }
                    )
                }
              </div>
            </div>
        )
    }
}

export default Profiles;
