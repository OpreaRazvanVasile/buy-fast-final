import { createContext,useState,useEffect} from "react";
import { getDocumentFormDB } from "../../utils/fierbase/fierbase.utils";
  


export const CategoriesContext=createContext({
  categories:{},
  setCategories:()=>{},
})

export const CategoriesProvider=({children})=>{
    const[categories,setCategories]=useState({})

     useEffect(()=>{
      const getDocFromDb=async()=>{
       const doc= await getDocumentFormDB('categories')
       console.log(doc)
       setCategories(doc)
      }
      getDocFromDb()

    },[])
    

  return <CategoriesContext.Provider value={{categories}}>{children}</CategoriesContext.Provider>

}


   