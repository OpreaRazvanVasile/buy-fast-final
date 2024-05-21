
import './App.scss';
import { Routes, Route } from 'react-router';
import Home from './routs/home/home.component';
import Navigation from './routs/navigation/navigation.component';
import Auth from './componets/authentification/auth.component';
import Shop from './routs/shop/shop.component';
import Checkout from './routs/checkout/checkout.component';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchDirectoryCategoriesStart } from './store/directory-categories/directory-categories.actions';

import { chechUserSession } from './store/user/user.actions';
import Order from './routs/order/order.componet';

const App=()=> {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(chechUserSession())          
    

  },[])
 
    useEffect(()=>{
      dispatch(fetchDirectoryCategoriesStart())
    },[])

    



  return (
    < Routes >
    
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/shop/*' element={<Shop/>}></Route>
        <Route path='/checkout/*' element={<Checkout/>}></Route>
        <Route path='/checkout/order'element={<Order/>}></Route>
       </Route>
    </Routes >
  )
}

export default App;
