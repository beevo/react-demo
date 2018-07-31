import React, { Component } from 'react';
//React is default component, brackets means its not default
import logo from './logo.svg';
import './RecipeApp.css';

import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
