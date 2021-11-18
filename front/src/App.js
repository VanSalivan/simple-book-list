
import React from 'react'
import { Routes, Route } from 'react-router';

import NavBar from './components/NavBar'
import BookList from './components/BookList';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes path='/'>
          <Route index element={<BookList />} />
          <Route path='create-book' element={<CreateBook />} />
          <Route path='update-book/:id' element={<UpdateBook />} />
        </Routes>
      </div>
    </>

  );
}

export default App;