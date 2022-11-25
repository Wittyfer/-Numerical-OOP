import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bisection from './components/Bisection';
import Home from './components/Home';
import MyNav from './components/MyNav';
import FalsePosition from './components/FalsePosition';
import OnePoint from './components/OnePoint';
import NewtonRaphson from './components/NewtonRaphson';
import Secant from './components/Secant';
import Gauss from './components/Gauss';
import Cramer from './components/Cramer';
import Jacobi from './components/Jacobi';
import Seidel from './components/Seidel';
import Conjugate from './components/Conjugate';
import Test from './components/Test';

const App = () => {
  return (
    <div>
      <MyNav/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bisection" element={<Bisection/>}/>
        <Route path="/falseposition" element={<FalsePosition/>}/>
        <Route path="/onepoint" element={<OnePoint/>}/>
        <Route path="/newtonraphson" element={<NewtonRaphson/>}/>
        <Route path="/secant" element={<Secant/>}/>
        <Route path="/gauss" element={<Gauss/>}/>
        <Route path="/cramer" element={<Cramer/>}/>
        <Route path="/jacobi" element={<Jacobi/>}/>
        <Route path="/seidel" element={<Seidel/>}/>
        <Route path="/conjugate" element={<Conjugate/>}/>
        <Route path="/tests" element={<Test/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
