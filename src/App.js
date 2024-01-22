import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router';
import Home from './routs/home/home.component';
import Navigation from './routs/navigation/navigation.component';
import Auth from './componets/authentification/auth.component';
import Shop from './routs/shop/shop.component';
import Checkout from './routs/checkout/checkout.component';
import { useEffect } from 'react';
import { authStateChangedListener } from './utils/fierbase/fierbase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser} from './store/user/user.actions';
import { fetchDirectoryCategoriesStart } from './store/directory-categories/directory-categories.actions';
import Spinner from './componets/spinner/spinner.componet';
import { directoryDataIsLoadingSelector,directoryDataErrorSelector } from './store/directory-categories/directory-category.selectors';
import ErorrMessage from './componets/error-message/error-message.component';
const App=()=> {
  const dispatch=useDispatch()
  const loading=useSelector(directoryDataIsLoadingSelector)
  const dataErr= useSelector(directoryDataErrorSelector) 
 
    useEffect(()=>{
      dispatch(fetchDirectoryCategoriesStart())
    },[dispatch])

    
  useEffect(()=>{
    const unsubsribe=authStateChangedListener((users)=>{
       
        dispatch(setCurrentUser(users))


       
    },[dispatch])


    
    return unsubsribe
                

 },[dispatch])


  return (
    < Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/shop/*' element={<Shop/>}></Route>
        <Route path='/checkout/' element={<Checkout/>}></Route>
       </Route>
    </Routes >
  )
}

export default App;
