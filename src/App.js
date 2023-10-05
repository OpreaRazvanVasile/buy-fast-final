import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router';
import Home from './routs/home/home.component';
import Navigation from './routs/navigation/navigation.component';
import Auth from './componets/authentification/auth.component';
import Shop from './routs/shop/shop.component';
import Checkout from './routs/checkout/checkout.component';


function App() {
  return (
    < Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}>
        </Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/shop/*' element={<Shop/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Route>
    </Routes >
  )
}

export default App;
