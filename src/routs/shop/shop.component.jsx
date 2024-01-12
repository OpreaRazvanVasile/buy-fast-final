import { Route,Routes } from "react-router";
import { useEffect } from "react";

import { setCategories } from "../../store/categories/categories.actions";
import { useDispatch } from "react-redux";
import CategoriesComponent from "../../componets/categories/categories.componet";
import Category from "../../componets/category-routs/category-routs.componet";
import { getDocumentFormDB } from "../../utils/fierbase/fierbase.utils";
import { useSelector } from "react-redux";
import { selectorCategoires } from "../../store/categories/categories.selector";
const Shop=()=>{
    const dispatch=useDispatch()
    const categories=useSelector(selectorCategoires)


    useEffect(()=>{
        const getDocFromDb=async()=>{
         const doc= await getDocumentFormDB('categories')
        
         dispatch(setCategories(doc))
        
        }
        getDocFromDb()
  
  
      },[dispatch])
    
    


return(
    <Routes>
        <Route index element={<CategoriesComponent categories={categories}/>}></Route>
      
        <Route path=":category" element={<Category/>}></Route>
    </Routes>
)


}

export default Shop