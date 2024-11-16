import React from 'react'
import { CraImage, CraText } from '../utils'

const NavContainer = ({children, className}) => {
    return(
        <div className={`row-span-2 p-2 items-center flex justify-between ${className}`} >
            {children}
        </div>
    )
}

function Nav({right = <CraText text={''}/>, className = ''}) {
  return (
    <NavContainer className={className}>
        <CraImage imgId={'logo'} className={' h-full w-1/4 sm:w-1/2'}/>
        {right}
    </NavContainer>
  )
}

export default Nav