import React from 'react'
import { BUY_BOOK, SALE_BOOK } from './BookTypes'


const initialState = {
    NumberOfBook :200,
}

const BookReducer = (state=initialState ,action) => {
   switch (action.type) {
    case BUY_BOOK:
         return {
            ...state,
            NumberOfBook :state.NumberOfBook-1
         }
    case SALE_BOOK:
         return {
            ...state,
            NumberOfBook :state.NumberOfBook+1
         }
   
    default:
        return state;
   }
}

export default BookReducer

