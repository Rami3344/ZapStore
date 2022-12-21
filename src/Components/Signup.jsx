import React from 'react'
import "./Popup.css"
function Signup(props) {
  return (props.trigger) ? (
    <div>
        <div className="popup">
            <div className='popup-inner'>
                <button onClick={()=>props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    </div>
) :"";
}
export default Signup