import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
 


let array = [
      {id: 0, name:'키키 인형',quan:2},
      {id: 1, name:'가오나시 인형', quan:1}

];

function reducer(state = array, action){
  if(action.type === 'increase'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  }else if(action.type ==='discrease'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  }else{
    return state
  }
  

}
let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
