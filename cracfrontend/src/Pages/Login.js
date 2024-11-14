import React, { useState } from 'react'
import { CraButton, CraForm, CraHeading, CraImage, CraInput } from '../utils'
import Nav from '../Components/Nav'
import { SwitchConnx } from './Register'

const LoginContainer = ({children}) =>{
  return(
    <div className=' w-screen h-screen grid grid-rows-7 '>
      {children}
    </div>
  )
}

const BodyContainer = ({children}) =>{
  return(
    <div className=' col-span-5 p-2  flex flex-col justify-center'>
      {children}
    </div>
  )
}

const FormContainer = ({children}) =>{
  return(
    <div className=' w-3/4 relative mb-3'>
      {children}
    </div>
  )
}




function Login() {

  const [user, setUser] = useState({usernameORemail:{value:'', error:''}, Password:{value:'', error:''}})
  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('usernameORemail', user.usernameORemail.value)
    formData.append('password', user.Password.value)
    fetch('http://localhost:3001/user/login/',{
      body:formData
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((error) => console.log('An error occured', error))
  }
  return (
    <LoginContainer>
      <Nav/>
      <BodyContainer>
        <CraHeading  text={'Welcome back in your App'} />
        <FormContainer >
          <CraImage className={'relative z-10 opacity-20 '}/>
          <CraForm handleSubmit={handleSubmit} className=' flex flex-col gap-2'>
            <CraInput autoFocus = {true} user={user} type='text' setUser={setUser} className=' w-full p-2' placeholder={'Enter your username or password'} field={'usernameORemail'} error={user.usernameORemail.error}/>
            <CraInput user={user} type='password' setUser={setUser} placeholder={'Enter your password.'} className=' w-full p-2' field={'password'} error={user.Password.error}/>
            <CraButton value={'Login'} className=' border border-red-500 w-1/4 text-white text-sm' style={{backgroundColor:'rgba(47, 45, 45, 1)'}}/>
          </CraForm>
        </FormContainer>
        <SwitchConnx question={"Don't have an account?"} redirection={'/register'} textredirection={'Sign up here'}/>
      </BodyContainer >
    </LoginContainer>
  )
}

export default Login