import InputForm from "../input-form/input-form.component"
import Button from "../button/button.component"
import SelectorForm from "../selectForm/select.compoent"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generateDate } from "../../utils/fierbase/date.generator"
import { selectOrderClientType,selectorOrderPaymentType} from "../../store/order/order.selector"
import { cartItemsSelector,cartTotalPriceSelector } from "../../store/cart/cart.selector"
import { setClientType,
    setPaymentType,
    setProductsOrder,
    setTotalInOrder,
    setOrderData ,
    setIsOrderSent,
    setOrderUID,
    setOrderDate,} from "../../store/order/order.action"

import { uid as id } from "../../utils/fierbase/uid.generator"    
const OrderNotSent=()=>{
   
const dispatch=useDispatch()
const clientOptions = [
    { value: 'individual', label:'Individual' },
    { value: 'legalEntity', label: 'Legal Entity' },
   
  ]
const paymentOptions=[ { value: 'ramburs', label:'Ramburs' },{value:'card',label:'Card'}]  
const clientType=useSelector(selectOrderClientType)
const paymentType=useSelector(selectorOrderPaymentType)
const productsOrder=useSelector(cartItemsSelector)
const totalPriceCart=useSelector(cartTotalPriceSelector)
const uid=id



const defaultInputPerson={
    firstName:'',
    lastName:'',
    email:"",
    phone:'',
    country:'',
    county:'',
    city:'',
    zip:'',
    details:'',
  
}

const defaultInputCompany={
    ...defaultInputPerson,
    companyName:'',
    cui:'',
    iban:''

}

const[inputDataPerson,setInputDataPerson] =useState(defaultInputPerson)
const[inputDataCompany,setInputDataCompany] =useState(defaultInputCompany)



const{firstName,lastName,email,phone,country, county,city,zip,details}=inputDataPerson



const selectType=(event)=>{
const value=event.value
dispatch(setClientType(value))

}
const selectPayment=(event)=>{
const value=event.value
dispatch(setPaymentType(value))

}




const onChangeHandler=(event)=>{
let{name,value}=event.target

if(clientType==='individual'||!clientType)
    setInputDataPerson(()=>{
        return {
        ...inputDataPerson,
        [name]:value
        }
    })

    

if(clientType==='legalEntity'){
    setInputDataCompany(()=>{
        return{
            ...inputDataCompany,
            [name]:value
        }
    })
}

    

}


const submitHandler=async(event)=>{
event.preventDefault()
 dispatch(setProductsOrder(productsOrder))
 dispatch(setTotalInOrder(`${totalPriceCart}$`))
if(clientType==='individual') {
    dispatch(setOrderUID(`${firstName}.${uid()}`.toLocaleLowerCase()))
    dispatch(setOrderDate(generateDate()))
    dispatch(setOrderData(inputDataPerson))

}
else{
    dispatch(setOrderUID(`${inputDataCompany.companyName}.${uid()}`.toLocaleLowerCase()))
    dispatch(setOrderDate(generateDate()))
    dispatch(setOrderData(inputDataCompany))
  
}

 dispatch(setIsOrderSent())

}

return (


    <>
    {totalPriceCart===0?'':
    <>
    <h2>Finish Order</h2>
    <form onSubmit={submitHandler}>
    <br />
   <SelectorForm label='Client Type:' options={clientOptions}
    onChange={selectType} required></SelectorForm>
 
 
 <InputForm label='First Name' type='text'  name="firstName" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? firstName:inputDataCompany.firstName}>
</InputForm>
 <InputForm label='Last Name' type='text'  name="lastName" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? lastName:inputDataCompany.lastName}></InputForm>
 <InputForm label='Email' type='email'  name="email" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? email:inputDataCompany.email}></InputForm>
 <InputForm label='Phone Number' type='text'  name="phone" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? phone:inputDataCompany.phone}></InputForm>
 <InputForm label='Country' type='text'  name="country" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? country:inputDataCompany.country}></InputForm>
 <InputForm label='County' type='text'  name="county" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? county:inputDataCompany.county}></InputForm>
 <InputForm label='City' type='text'  name="city" onChange={onChangeHandler} required value={clientType==='individual'||!clientType? city:inputDataCompany.city}></InputForm>
 <InputForm label='Zip Code' type='text'  name="zip" onChange={onChangeHandler} value={clientType==='individual'||!clientType? zip:inputDataCompany.zip}></InputForm>
 <InputForm label='Delivery Details' type='text'  name="details" required onChange={onChangeHandler} value={clientType==='individual'||!clientType? details:inputDataCompany.details}></InputForm>
 {clientType==='legalEntity'?<>
 <InputForm label='Company Name' type='text'  name="companyName" required onChange={onChangeHandler} value={inputDataCompany.companyName}></InputForm>
 <InputForm label='CUI' type='text'  name="cui" onChange={onChangeHandler}  value={inputDataCompany.cui}></InputForm>
 <InputForm label='IBAN' type='text'  name="iban" onChange={onChangeHandler} value={inputDataCompany.iban}></InputForm>
  </>:''}
 <SelectorForm label='Payment' options={paymentOptions} onChange={selectPayment} required></SelectorForm> 
 <br />
 <Button type='submit' children='Finish Order'></Button>


</form>
   </>

    }
      
    </>


)

}

export default OrderNotSent
