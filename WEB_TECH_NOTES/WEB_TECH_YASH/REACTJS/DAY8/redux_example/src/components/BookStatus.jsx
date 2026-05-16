import React from 'react'
import {useSelector ,useDispatch} from 'react-redux';
import { buyBook, saleBook } from '../redux/BookAction';

function BookStatus() {
    const noOfBooks = useSelector((state)=> state.NumberOfBook ) // data access from store
   const dispatch = useDispatch(); // action provider
    
  return (
    <>
     <div>Book Shop Status</div>
     <h2>No of Books - {noOfBooks} </h2>


     <button onClick={()=> dispatch(buyBook())}>Buy Book</button>
     <button onClick={()=> dispatch(saleBook())}>Sale Book</button>

    </>
  )
}

export default BookStatus