import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
const poop = React.createElement('li', {}, 'poop' )
const pee = React.createElement('li', {}, 'pee')
const theOther = React.createElement('li', {}, 'theother')
const list = React.createElement('ul', {className: 'whatever'}, [poop, pee, theOther] )
const container = React.createElement('div', {}, [title, paragraph,list]);


ReactDOM.render(
  container,
  document.getElementById('global')
);
