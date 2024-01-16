import { Route,Routes } from "react-router";
import { useEffect } from "react";

import { fetchCategoiresAsync} from "../../store/categories/categories.actions";
import { useDispatch } from "react-redux";
import CategoriesComponent from "../../componets/categories/categories.componet";
 import CategoryRouts from "../../componets/category-routs/category-routs.componet"
const Shop=()=>{
   
     const dispatch=useDispatch()
     console.log(`Render Shop Page`)
     
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