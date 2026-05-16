// store -> 200 => centralized 
// npm install redux react-redux

import {createStore} from 'redux'
import BookReducer from './BookReducer'


const store =createStore(BookReducer);

export default store;