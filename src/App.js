import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Order from './component/Order';
import Admin from './component/Admin';
import Menu from './component/Menu';
import PorductCard from './Pages/ProductCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/productcard' element={<PorductCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
