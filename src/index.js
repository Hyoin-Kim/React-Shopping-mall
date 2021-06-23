import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Data from './data.js';
 


let array = [
      {id: 0, name:'키키 인형',quan:2},
      {id: 1, name:'가오나시 인형', quan:1}

];





function reducer(state = array, action){
  if(action.type === 'type'){
    let found = state.findIndex((a)=>{return a.id === action.data.id});
    

    if(found>=0)
    {
      let copy= [...state];
      copy[found].quan++;
      return copy

    }else{
      let copy= [...state];
      copy.push(action.data);
      return copy
    }

  }
  if(action.type === 'increase'){
    let copy = [...state];
    copy[action.data].quan++;
    return copy
  }else if(action.type ==='decrease'){
    let copy = [...state];
    copy[action.data].quan--;
    return copy
  }else{
    return state
  }
  

}
let store = createStore(reducer);
let goods = createStore( ()=>{
  return Data;
})



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} goods={goods}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
