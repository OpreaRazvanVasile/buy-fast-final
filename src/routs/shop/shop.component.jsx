
import { Route,Routes } from "react-router";

import CategoriesComponent from "../../componets/categories/categories.componet";
import Category from "../../componets/category-routs/category-routs.componet";

const Shop=()=>{

return(
    <Routes>
        <Route index element={<CategoriesComponent/>}></Route>
      
        <Route path=":category" element={<Category/>}></Route>
    </Routes>
)


}

export default Shop

















