import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {Home, List, Hotel, Login} from './pages/index'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

