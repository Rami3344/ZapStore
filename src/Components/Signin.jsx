import React from 'react'

export default function Signin(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className='popup-inner'>
            <button onClick={()=>props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>
  ):""
}
