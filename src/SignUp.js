import React,{useState,useEffect} from 'react';
import useInput from './useInput';




function SignUp({formSub}) {

  const {handleChange,handleSubmit,state,errors} = useInput({
      formSub
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
              FirstName : <input type='text' name="firstName" value={state.firstName} onChange={handleChange}/>
          </label>
           {errors.firstName && <p>{errors.firstName}</p>}
          <div>
          <label>
              LastName : <input type='text' name="lastName" value={state.lastName} onChange={handleChange}/>
          </label>
          {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
          <label>
              Email : <input type='text' name="email" value={state.email} onChange={handleChange}/>
          </label>
          {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
          <label>
              Password : <input type='text' name="password" value={state.password} onChange={handleChange}/>
          </label>
          {errors.password && <p>{errors.password}</p>}
          </div>
          <button type='submit'>SignUP</button>
      </form>

    </div>
  )
}

export default SignUp