import React from 'react'
import { Provider } from 'react-redux';
import BookContainer from './components/BookContainer';
import store from './redux/Store';
import BookStatus from './components/BookStatus';


function App() {
  return (
    <Provider store={store}>
      <>
       <BookContainer/>
       <BookStatus/>
      </>
    </Provider>
  )
}

export default App