import React, { useState } from 'react'
import { CraButton, CraForm, CraHeading, CraImage, CraInput, CraText, validateEmail } from '../utils'
import Password from '../Modal/Password'
import {useNavigate} from 'react-router-dom'


const RegisterContainerPage =({children}) => {

    return(
        <div className = ' relative grid  grid-cols-7 z-10'>
            {children}
        </div>
    )
}

const RegisterContainer = ({children}) => {

    return(
        <div className=' h-screen w-screen relative'>
            {children}
        </div>
    )
}
const LeftRegister = ({children}) => {

    return(
        <div className =' col-span-2 flex flex-col items-center justify-start p-3 gap-2'>
            {children}
        </div>
    )
}
const RightRegister = ({children}) =>{
    return(
        <div className=' col-span-5 flex items-center justify-center gap-2 p-3'>
            {children}
        </div>
    )
}

export function SwitchConnx({question, redirection, textredirection }){
    const navigate = useNavigate()
    return <div className=' flex gap-3'><p className=' text-sm' style={{color:'rgba(97, 92, 92, 1)'}}> {question}</p><button className=' text-red-500 text-sm border-none bg-white' onClick={()=>navigate(`${redirection}`)}>{textredirection}</button></div>
}

function Register() {
    const [zIndex, setZindex] = useState('0')

    const [user, setUser] = useState({
        username:{value:'', isTouched:false, editing:false, error:'', errorServer:'' },
        email:{value:'', isTouched:false, editing:false}, error:'', errorServer:'',
        password:{value:'',isTouched:false, editing:false, error:''},
        confirmPassword:{value:'', isTouched:false, editing:false, error:''},
    })

    const validatedData = user.username.value.length > 3 && user.password.value.length > 7 && validateEmail(user.email.value) && user.password.value === user.confirmPassword.value
    
    function handleSubmit(e){
        e.preventDefault()
        if(validatedData){
            const formData = new FormData()
            formData.append('username', user.username.value)
            formData.append('email', user.email.value)
            formData.append('password', user.password.value)

            fetch('http://localhost:3001/user/register',{
                body:formData
            })
            .then(()=>console.log('The user is successfully created'))
            .catch((error) =>console.log('An error occured while creating user', error))
            
        }

    }
    return (
    <RegisterContainer>
        <RegisterContainerPage>
            <LeftRegister>
                <CraImage alt={'Logo CRA'} imgId={'logo'} className={'h-1/5 w-3/4'}/>
                {validatedData ? <CraImage alt={'car1'} imgId={'car1'} className={'w-3/4 h-1/4'}/> : <CraImage alt={'car2'} imgId={'car2'} className={'w-3/4 h-1/4'}/>}
                <CraText text={'Your confort and safety first'} className={'text-lg'}/>
            </LeftRegister >
            <RightRegister>
                <CraHeading text={"Welcome, let's create your account first."} className={'pb-2'}/>
                <CraForm handleSubmit={handleSubmit}>
                    <CraInput placeholder={'Username'} autoFocus={true} user={user} setUser={setUser} field={'username'} error={user.username.error} serverError={user.username.errorServer}/>
                    <CraInput placeholder={'Email'}  user={user} setUser={setUser} field={'email'} error={user.email.error} serverError={user.email.errorServer}/>
                    <CraButton handleOnclick={() =>setZindex('20')} value={<CraInput placeholder={'Password'}  user={user} setUser={setUser} field={'password'} error={user.password.error}/>}/>
                    <CraInput placeholder={'Confirm your password'}  type='password' user={user} setUser={setUser} field={'confirmPassword'} error={user.confirmPassword.error}/>
                    <CraButton handleOnclick={()=>{}} type={'submit'} disabled = {!validatedData} style={!validatedData ? {backgroundColor:'rgba(242, 242, 247, 1)'} : {backgroundColor:'rgba(47, 45, 45, 1)'}} value={'Create account'} className={`text-white font-bold  w-1/3 p-2`}/>
                </CraForm>
                <SwitchConnx question={'Already have an account?'} redirection={'/login'} textredirection={'Sing in here'}/>
            </RightRegister>
        </RegisterContainerPage>
        <Password  setZindex={setZindex} zIndex={zIndex}/>
    </RegisterContainer>
  )
}


export default Register