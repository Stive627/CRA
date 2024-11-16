import React from 'react'
import Nav from '../Components/Nav'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const HomePageContainer = ({children}) =>{
    return(
        <div className=' grid grid-rows-8' style={{backgroundColor:'rgba(242, 242, 247, 1)'}}>
            {children}
        </div>
    )
}

const Avatar = () =>{
    return(
        <div className=' p-1'>
            <div className = 'rounded-full border flex justify-center items-center'  style={{backgroundColor:'rgba(89, 89, 89, 1)', borderColor:'rgba(0, 0, 0, 1)'}}>
                <p className=' text-lg text-white'></p>
            </div>
        </div>
    )
}

const BodyContainer = ({children}) =>{

    return(

        <div className = ' row-span-6'>
            <div className=' h-full w-full grid grid-cols-6'>
                {children}
            </div>
        </div>
    )
}

const SidebarContainer = ({children}) => {

    
    return(
        <div className=' col-span-2 flex items-center'>
            <div className=' flex flex-col gap-2'>
                {children}
            </div>
        </div>
    )
}

const  CarShowcaseContainer = ({children}) => {

    
    return(
        <div className='flex items-center'>
            <div className=' flex flex-col gap-2'>
                {children}
            </div>
        </div>
    )
}

const Parameter = ({param}) =>{
    return(
        <div className=' flex flex-col gap-2'>
            <p className=' text-lg' style={{color:'rgba(61, 57, 57, 1)'}}>{param}</p>
            <div className=' bg-white border border-gray-700 w-full flex justify-between items-center'>

            <>{true ? <KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}</>
            </div>
        </div>
    )
}



function HomePage() {
  return (
    <HomePageContainer>
        <Nav className=' bg-slate-300' right={<Avatar/>}/>
        <BodyContainer>
            <SidebarContainer></SidebarContainer>
            <CarShowcaseContainer></CarShowcaseContainer>
        </BodyContainer>
    </HomePageContainer>
  )
}

export default HomePage