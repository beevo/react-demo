import React, { Component } from 'react';
import './Recipe.css';
class Recipe extends Component {
    render(){
        // using props (params given in Recipe tag)
        // const title = this.props.title; // ^
        const {title, img, instructions} = this.props; //destructuring! es5
        const ingredients = this.props.ingredients.map((ing,index) => (
            <li key={index}> {ing} </li>    
        ));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">Recipe:: {title} </h3>
                    <h4>{instructions}</h4>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Recipe;