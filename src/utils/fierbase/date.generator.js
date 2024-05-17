
export const generateDate=()=>{
    const date=new Date()

    const options={
     hour:'numeric',
     minute:'numeric',
     day:'numeric',
     month:'long',
     year:'numeric',
   
      
   }
   return new Intl.DateTimeFormat('en-US',options).format(date);
   
   
}
