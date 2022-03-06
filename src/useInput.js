import React,{useState,useEffect} from 'react';
import Validation from './Validation';

const useInput = ({formSub})=>{
    const [state,setState] = useState({
        firstName : "",
        lastName: "",
        email : '',
        password : ""
    })
    
    const [errors,setErrors]= useState({})
    
    const [dataSuc,setDataSuc] = useState(false)
    
    const handleChange = e => {
        setState({...state, [e.target.name] : e.target.value})
    }
    
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataSuc){
            formSub()
        }
    },[errors])
    
    
    
    const handleSubmit = e =>{
        e.preventDefault()
      
       setErrors(Validation(state))
       setDataSuc(true)
    }

    return {handleChange,handleSubmit,state,errors}
}

export default useInput