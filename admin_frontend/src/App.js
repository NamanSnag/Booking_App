import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {Home, List, Hotel} from './pages/index'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
