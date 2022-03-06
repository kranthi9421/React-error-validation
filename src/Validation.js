

const Validation = (state)=>{


let errors = {}


  if(!state.firstName){
      errors.firstName = 'Required FirstName'
  }
  if(!state.lastName){
       errors.lastName = 'Required LatName'
  }
  if(!state.email){
      errors.email = 'Required Email'
  }
  if(!state.password){
      errors.password = 'Required passowrd'
  }

  return errors


  
  
}

export default Validation