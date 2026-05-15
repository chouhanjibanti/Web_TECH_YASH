

// Action creator for buying book

import { BUY_BOOK, SALE_BOOK } from "./BookTypes"

const buyBook = () =>{
    return {
        type: BUY_BOOK
    }
}

// Action Creatir for saling book
const saleBook = () =>{
    return {
        type:SALE_BOOK
    }
} 
