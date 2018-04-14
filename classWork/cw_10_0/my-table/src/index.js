import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Category from './Category';


const app = <App />;

const category =  <Category />;

ReactDOM.render(app, document.getElementById('root'));
ReactDOM.render(category, document.getElementById('root'));

