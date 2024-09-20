import React,{useState} from 'react'
import './Signup.css'
function Signup() {
const [formData,setFormData]= useState({
firstName:'',
lastName:'',
email:'',
password:''
})

const handleInputChange = (event)=>{
const {name,value} = event.target
setFormData((prevData)=>({...prevData,[name]:value}))
}


const handleSubmit =()=>{
    console.log(formData,"The Input Data")
}

  return (
    <div className='signup-card'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
<label htmlFor="">First Name</label>
<input type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={(event)=>handleInputChange(event)} />

<label htmlFor="">Last Name</label>
<input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={(event)=>handleInputChange(event)} />

<label htmlFor="">Email</label>
<input type="Email" placeholder='Email' name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}/>

<label htmlFor="">Password</label>
<input type="password" placeholder='Password' name='password' value={formData.password} onChange={(event)=>handleInputChange(event)} />

<button onClick={handleSubmit}>Sign Up</button>   
      </form>
    </div>
  )
}

export default Signup
