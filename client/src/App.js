import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from "./components/Main";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 style={{margin:"20px", marginLeft: "30px"}}>Favorite Authors</h1>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/api/newAuthor' element={<NewAuthor/>}/>
          <Route path='/updateAuthor/:id' element={<EditAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
