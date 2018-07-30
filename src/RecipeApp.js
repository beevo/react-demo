import React, { Component } from 'react';
//React is default component, brackets means its not default
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';
class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="pasta" 
          ingredients={['flour','water']} 
          instructions="Mix ingredients."
          img="http://images.bigoven.com/image/upload/t_recipe-256/cajunchickenpasta-17.jpg"
          />
      </div>
    );
  }
}

export default RecipeApp;
