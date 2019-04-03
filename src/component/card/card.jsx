import React, { Component } from 'react';
import './card.sass'

class Card extends Component{
    constructor(props){
        super();
        this.title = props.title;
        this.image = props.image;
        this.description = props.description;
    }

    render(props){
        return(
            <div className="card">
                <div className="image-placeholder">
                    <img alt="Card" src={this.image}/>
                    <div className="banner-hover">
                        <div className="card-content">
                            <h3>{this.title}</h3>
                            <p>{this.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;