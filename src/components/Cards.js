import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import projectFashion from '../assets/project-fashion.jpg'
import projectStreet from '../assets/project-street.jpg'
import projectWedding from '../assets/project-wedding.jpg'
import projectSamba from '../assets/project-samba.jpg'
import projectPortrait from '../assets/project-portrait.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out ours project</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem 
                            src={projectFashion}
                            text="Helsinki Fashion Week 2019"
                            label="Fashion"
                            path="/services"/>
                        <CardItem 
                            src={projectStreet}
                            text="Street life by nights"
                            label="Street"
                            path="/services"/>                   
                    </ul>

                    <ul className="cards-items">
                        <CardItem 
                            src={projectWedding}
                            text="Wedding"
                            label="Wedding" 
                            path="/services"/>
                        <CardItem 
                            src={projectSamba}
                            text="Helsinki Samba Carnival 2019"
                            label="Event"
                            path="/services"/>                   
                        <CardItem 
                            src={projectPortrait}
                            text="Street Portrait"
                            label="Portrait"
                            path="/services"/>                   
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards
