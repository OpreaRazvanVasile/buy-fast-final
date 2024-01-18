import { Route,Routes } from "react-router";
import { useEffect } from "react";

import { fetchCategoiresAsync} from "../../store/categories/categories.actions";
import { useDispatch, useSelector } from "react-redux";
import CategoriesComponent from "../../componets/categories/categories.componet";
import CategoryRouts from "../../componets/category-routs/category-routs.componet"
import { selectorError } from "../../store/categories/categories.selector";


const Shop=()=>{
   
     const dispatch=useDispatch()
    
     const errorCategories=useSelector(selectorError);
     console.log(errorCategories) 
    useEffect(()=>{
     
        
         dispatch(fetchCategoiresAsync)
        
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