import React from 'react'
import '../App.css';
import { Button } from './Buttlon'
import '.HeroSection.css';

function HeroSection(){
    return (
        <div className = 'hero-container'>
            <video src = "/videos/video-2.mp4" autoPlay loop muted />
            <h1>WELCOME TO HEADSTART </h1>
            <p> Let's take a look around </p>
            <div className = 'hero-btns'>
            <Button className = 'btns'
             buttonStyle= 'btn--outline'
            buttonSize = 'btn--large'
            >
                GET STARTED
            </Button>
            <Button className = 'btns'
             buttonStyle= 'btn--primary'
            buttonSize = 'btn--large'
            >
                GET STARTED
            </Button>
            </div>

        </div>
    );
}

export default HeroSection