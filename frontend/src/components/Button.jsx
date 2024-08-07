import React from 'react'
// in Button you must  passes the name of the button , the associated class and the function that handel the event
// ix prop={{name: "sign in", class:"bg-red-500", onClick:()=>{}}}
const Button = ({prop}) => {
  return (
    <button  className={prop.class} onClick={prop.onClick} >
        {prop.name}
    </button>
  )
}

export default Button
