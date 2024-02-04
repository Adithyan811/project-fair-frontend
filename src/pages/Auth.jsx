import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPIs'



function Auth({register}) {
  const location = useNavigate()

  const isRegisterFrom = register?true : false

  //state creation
  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:""
  })

  const registerData=async()=>{
    const {username,email,password} = userData
    if(!username || !email || !password){
      alert("please Enter a Valid Details")
    }
    else{
      const result = await registerAPI(userData)
      console.log(result);
      if(result.status == 200){
        //api call
        alert(`${result.data}`)
         //user registration successfull
         location('/login')
      }
      else{
        alert(result.response.data) //user already registered
      }
    }
    // console.log(userData);

  }

  const loginData=async()=>{
    const {email,password} = userData
    if(!email || !password){
      alert("please Fill The Form")
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);
      if(result.status ==200){
        alert("Login successfull")
        //set user object into session storage
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)
        location('/dashboard')
      }
      else{
        alert("Please Enter Valid Details")
      }
    }


  }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%',height:'500px'}}>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://cdn.icon-icons.com/icons2/2775/PNG/512/login_icon_176905.png" alt="" width={'80%'} height={''} />
          </div>
          <div className="col">
            <h3 className='text-center'>Project Fair</h3>
            <h5 className='m-3 text-center'>
              {
                isRegisterFrom? 'Register here' : 'login here'
              }
            </h5>
            <form>
              {
                isRegisterFrom &&
                <input type="text" onChange={e=>setUserData({...userData,username:e.target.value})} placeholder='Enter Name' className='form-control'/>
                
              }
                <input type="text" onChange={e=>setUserData({...userData,email:e.target.value})} placeholder='Enter Email' className='form-control'/>
                <input type="text" onChange={e=>setUserData({...userData,password:e.target.value})} placeholder='Enter Password' className='form-control'/>

            </form>
            {
              isRegisterFrom ?
              <div className='text-center m-3'>
                <button onClick={registerData} className='btn btn-success '>Register</button>
                <Link to={'/login'} style={{textDecoration:'none',color:'grey'}}>
                 <p className='m-3'>Already Register?Please login from here</p>
                </Link>
              </div>
              :
              <div className='text-center m-3'>
                <button onClick={loginData} className='btn btn-info'>Login</button>
                <Link to={'/register'} style={{textDecoration:'none',color:'grey'}}>
                 <p className='m-3'>New to here? Please register....</p>
                </Link>
              </div>
            }
         </div>
        </div>
      </div>




      <div className='text-center ' style={{marginTop:'-70px'}}>
        <Link to={'/'}>
        <button className='btn btn-dark'>Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Auth