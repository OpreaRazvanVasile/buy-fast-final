import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { initializeApp } from "firebase/app";
import
 {getAuth,
 signInWithPopup,
 GoogleAuthProvider,
 signInWithRedirect,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged,


 } from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
   
   
} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCyRfRj44mCA5CICrX3t56lqmiY339r8A4",
    authDomain: "buyfast-db.firebaseapp.com",
    projectId: "buyfast-db",
    storageBucket: "buyfast-db.appspot.com",
    messagingSenderId: "980145639110",
    appId: "1:980145639110:web:8a66524ac522caf63691c7",
    measurementId: "G-K2VWZK6JGZ"
  };

  const fierbaseApp=initializeApp(firebaseConfig)

  const provaider=new GoogleAuthProvider()

  export const db=getFirestore()//fierstore DataBase
  provaider.setCustomParameters({
    prompt:"select_account"
  })

  
  export   const auth=getAuth()
  export  const signInWithGoogle=async function(){
   
   try{
    return await signInWithPopup(auth,provaider)
    //{user,tokenResponse,...}
    //{user:(user authentificated)}
   }

  catch(err){
    alert(err.message)
  }
 
}

export const redirectSingIn=async function(){
    return await signInWithRedirect(auth,provaider)
}


export const createUsersDocument=async function(userAuth,aditionalData){
    const docRef=doc(db,'users',userAuth.uid)
   
    
    const docSnapShot=await getDoc(docRef)
    
  
    try{
    if(!docSnapShot.exists()){
      

        const{displayName,email}=userAuth
        const setdate=new Date()
        const doc=!aditionalData?await setDoc(docRef,{displayName,email,date:setdate}):
        await setDoc(docRef,{displayName:aditionalData,email:email,date:setdate})
         return doc 
  
    }
    
}
 catch(err){
    alert(err.message)
}

return docSnapShot


}

// getAuth()
//   .createUser({
//     email: 'user@example.com',
//     emailVerified: false,
//     phoneNumber: '+11234567890',
//     password: 'secretPassword',
//     displayName: 'John Doe',
//     photoURL: 'http://www.example.com/12345678/photo.png',
//     disabled: false,
//   })
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     ('Successfully created new user:', userRecord.uid);
//   })
//   .catch((error) => {
//     ('Error creating new user:', error);
//   });
export const createAuthWithEmail=async(email,password)=>{
  if(!email||!password)return

try{

  return  await createUserWithEmailAndPassword(auth,email,password)
}

catch(err){

  if(err.code==='auth/email-already-in-use'){
    alert('Email already exists')
  }
  else if(err.code==='auth/weak-password'){
    alert( 'Password should be at least 6 characters')
  }
  else {
    alert(err.message)
  }
}
  


 

}







export const singInWithEmail=async(email,password)=>{


try{
  if(!email||!password)return
  return  await signInWithEmailAndPassword(auth,email,password)
}

catch(err){

 
 if(err.code==='auth/user-not-found'){
  alert("User are not found in the datebase")
 }
 else if(err.code==='auth/wrong-password'){
  alert("Password its wrong")
 }
 else {
  alert(err.message)
 }

 
}
  


 

}

export const signOutUser=async()=>{
  try{
    await signOut(auth)

  }
  catch(error){
    alert(error.message)
  }

}


export const authStateChangedListener=(callback)=>{
if(!callback)return

return onAuthStateChanged(auth,callback)
}

export const getCurrentUser=()=>{


  return new Promise((resolve,reject)=>{
    const unsubsribe=onAuthStateChanged(auth,
      (userAuth)=>{
        unsubsribe()
        resolve(userAuth)
      },
      reject
      )
    
  })
}


export const addOrdersColectionToDb=async(collectionKey,objectToAdd)=>{
  const colectionRef=collection(db,collectionKey)
  const batch=writeBatch(db)
  const id=objectToAdd.uid
  const docRef=doc(colectionRef,id)
  batch.set(docRef,objectToAdd)

  await batch.commit()
  


}

export const addCollectionToDB=async(collectionKey,objectToAdd)=>{
  const collectionRef=collection(db,collectionKey)
  const batch=writeBatch(db)// create a batch in db
  objectToAdd.forEach(obj=>{
    //{title:'mens',items:[{id:332..,imgUrl:..}]}
 
     const title=obj.title.toLowerCase() 
     //Categories=>mens
     const docRef=doc(collectionRef,title)
     
  
     batch.set(docRef,obj) 
     //set a batch in categories colection when the name of the document its
     //the title or a field  and obj its the obj  {title:'mens',items:[{id:332..,imgUrl:..}]}

    
  
})
await  batch.commit() 

}


export const getDocumentFormDB=async(collectionKey)=>{
  try{
    const collectionRef=collection(db,collectionKey)
    const q=query(collectionRef)
    const querySnapshot=await getDocs(q)
    
    
   const data= querySnapshot.docs.map(doc=>doc.data())
  
   const documetObj={}
   if(collectionKey==='categories'){
    const newData=data.map(item=>{
      return {...item,id:Number(item.id)}
    }).sort((a,b)=>a.id-b.id)

  
    newData.forEach(doc=>{
   
     
      const title=doc['title'].toLowerCase()
      const items=doc['items']

      documetObj[title]=items
      
     
     
     
      })
      return documetObj
     
   }
   else return [...data]
  
  }

catch(error){
  throw new error(error.message)
}


 
 
}
