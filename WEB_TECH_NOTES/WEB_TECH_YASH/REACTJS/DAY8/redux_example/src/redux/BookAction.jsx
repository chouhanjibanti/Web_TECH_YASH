

// Action creator for buying book

import { BUY_BOOK, SALE_BOOK } from "./BookTypes"

export const buyBook = () =>{
    return {
        type: BUY_BOOK
    }
}

// Action Creatir for saling book
export const saleBook = () =>{
    return {
        type:SALE_BOOK
    }
} 
