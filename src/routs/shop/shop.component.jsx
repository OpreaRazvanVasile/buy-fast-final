import { Route,Routes } from "react-router";
import { useEffect } from "react";

import { useDispatch} from "react-redux";
import CategoriesComponent from "../../componets/categories/categories.componet";
import CategoryRouts from "../../componets/category-routs/category-routs.componet"

import { fetchCategoriesStart } from "../../store/categories/categories.actions";

const Shop=()=>{
   
     const dispatch=useDispatch()

 
    useEffect(()=>{
     
        
         dispatch(fetchCategoriesStart())
        
        }
      ,[])
    
    


return(
    <Routes>
        <Route index element={<CategoriesComponent/>}></Route>
      
        <Route path=":category" element={<CategoryRouts/>}></Route>
    </Routes>
)


}

export default Shop