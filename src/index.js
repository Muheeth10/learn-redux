import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"; // 1- create globalized state
import  allReducers  from "./Reducers/index.js";
import {Provider} from 'react-redux';

//combineReducers it is useful to combine two or more reducers together which is helpful to pass to the store

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())














// //STORE -> GOLBALIZED STATE

// //ACTION -> INCREMENT //a simple function that returns the object

// const increment = () =>{
//   return {
//     type : 'INCREMENT' 
//   }
// }


// const decrement = () =>{
//   return {
//     type : 'DECREMENT' 
//   }
// }


// //REDUCER ->MODFIY THE STATE BASED ON THE ACTION PERFORMED



// const counter = (state=0,action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case 'DECREMENT':
//       return state-1;

//   }
// };


// //adding to the store 1 step

// let store = createStore(counter);

// //Display in the console

// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -> HERE WE PEROFORM THE ACTION(2)

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());




ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>

     <App />
     
    
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
