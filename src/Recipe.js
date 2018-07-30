import React, { Component } from 'react';

class Recipe extends Component {
    render(){
        // const title = this.props.title; // ^
        const {title, img, instructions} = this.props; //destructuring! es5
        const ingredients = this.props.ingredients.map((ing,index) => (
            <li key={index}> {ing} </li>    
        ));
        return(
            <div>
                <div>Recipe: {title} </div>
                <ul>
                    {ingredients}
                </ul>
                <p>
                    {instructions}
                    <br />
                    <img src={img} alt={title} />
                </p>
            </div>
        )
    }
}

export default Recipe;