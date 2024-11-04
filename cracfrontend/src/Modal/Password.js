import React, { useState } from 'react'
import { CraButton, CraInput } from '../utils'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PasswordContainer = ({children, zIndex}) =>{
    return(
        <div className={`z-${zIndex} absolute w-full h-full flex justify-center items-center`}>
            <div className=' bg-white border-2 border-gray-300 p-3 flex flex-col gap-2 justify-center items-center w-1/3'>
                {children}
            </div>
        </div>
    )
}

const ValidationPassword = ({minLength, digitalValue, specialCharacter}) =>{

    const parameter =[
        {param: 'Contain more than 7 values', icon:<CheckCircleIcon className={`${minLength? ' bg-green-600':'bg-gray-500'}`}/>},
        {param:'Contain digital value', icon:<CheckCircleIcon className={`${digitalValue? ' bg-green-600':'bg-gray-500'}`}/>},
        {param:'Contain special  character', icon:<CheckCircleIcon className={`${specialCharacter? ' bg-green-600':'bg-gray-500'}`}/>}
        

    ]
    .map(elt =><li key={elt.param} className=' flex justify-between divide-y font-medium'><p>{elt.param}</p> {elt.icon}</li>)

    return(
        <ul className=' w-full pr-3'>
            {parameter}
        </ul>
    )
}

function Password({zIndex, setZindex, users,setUsers }) {
    const [user, setUser] = useState({
        password:{value:'',isTouched:false, editing:false, error:''},
    })

    const minLength = user.password.value.length > 7
    const digitalValue = /\d+/.test(user.password.value)
    const specialCharacter = /[!@#$%^&*()]/.test(user.password.value)
    const validPass = minLength && digitalValue && specialCharacter

    
  return (
    <PasswordContainer zIndex={zIndex}>
        <CraInput user={user} type='passwordd' error={''}  placeholder={'Enter your password'} setUser={setUser} field={'password'} className={''} autoFocus={true} />
        {validPass? <CraButton   disabled={false} type={'button'} value={'Set the password.'} className={' w-1/2 bg-green-600  font-medium text-white text-sm p-2 '} handleOnclick ={ ()=>{setUsers({...users, password:{...users.password, value:user.password.value}}); setZindex('0')}} /> :
        <ValidationPassword minLength={minLength} digitalValue={digitalValue} specialCharacter={specialCharacter}/>}
    </PasswordContainer>
  )
}

export default Password