import React from 'react'
import '../App.css'
import Button from './Button'
import'./OpeningSection.css'
import vidBg from '../assets/vid1.mp4'

function OpeningSection() {
    return (
        <div className="open-container">
            <video src={vidBg} autoPlay loop muted/>
            <h1>TITLE 1</h1>
            <p>Description 1</p>
            <div className="open-btns">
                <Button des={"/sign-up"}
                        buttonStyle='btn--outline'
                        buttonSize="btn--large">
                    START
                </Button>
                <Button des={"/products"}
                        buttonStyle='btn--primary'
                        buttonSize="btn--large">
                    TAKE A LOOK <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default OpeningSection
