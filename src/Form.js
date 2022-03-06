import React,{useState} from 'react';

import SignUp from './SignUp';
import Success from './Success';

function Form() {

  const [formSuc, setFormSuc] = useState(false)


  const formSub = ()=>{
    setFormSuc(true)
  }

  return (
    <div>
      {!formSuc ? <SignUp formSub={formSub}/> : <Success/>}
    </div>
  )
}

export default Form