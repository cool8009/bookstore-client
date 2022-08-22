import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Authors from './components/Authors';
import Store from './components/Store';


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/authors' element={<Authors/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </Router>

  );
}

export default App;
