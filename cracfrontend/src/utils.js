

export  function CraImage({alt, imgId, className}){
    return (
      <div className={`${className}`}>
      <img alt={alt} className=' object-cover' src={`http://localhost:3000/images/${imgId}`} />
      </div>
    )
  }

  export function CraText({className, text }){
    return(
        <p className={className} style={{color:'rgba(89, 89, 89, 1)'}}>{text}</p>

    )
  }

  export function CraHeading({className, text }){
    return(
        <h1 className={className} style={{color:'rgba(54, 54, 54, 1)'}}>{text}</h1>

    )
  }

  export function CraInput({user, type='text', setUser, placeholder, error, field, serverError = '', className, autoFocus=false }){

    return(
        <div className =" flex flex-col gap-1">
            <input  type={type} style={{color:'rgba(89, 89, 89, 1)'}} placeholder={placeholder} className={`${className} w-full outline  p-2${error ? ' outline-red-500' : 'outline-black'}`} autoFocus={autoFocus} value = {user[field].value} onChange = {(e) =>setUser({...user, [field]:{...user[field], value:e.target.value}})} onBlur={() => setUser({...user, [field]:{...user[field], isTouched:true}})} onFocus = {() => setUser({...user, [field]:{...user[field], editing:true}})}/>
            {error && <p className=" text-sm text-red-500">{error}</p>}
            {serverError && <p className =" text-sm text-red-500">{serverError}</p>}
        </div>

    )
  }

export function CraForm({handleSubmit, children}){
    return(  
        <form onSubmit={handleSubmit}>
        {children}
        </form>
    )
}

export function CraButton({value,style={},  type = undefined, handleOnclick= ()=>{}, disabled=false, className = '', }){
    return(
        <button style={style} className={className} onClick={handleOnclick} type={type} disabled={disabled}>{value}</button>
    )
}


export function PasswordVerification(password){
    if(password.length < 8){
        return 'Password should contain more than 7 characters'
    }
}

export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
   