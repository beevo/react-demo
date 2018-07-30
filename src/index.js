import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//default import name
// import App from './App';
import RecipeApp from './RecipeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
registerServiceWorker();
