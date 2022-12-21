import logo from "./images/smartphone.png"
import Button from 'react-bootstrap/Button';
import Signup from "./Signup";
import { useState } from "react";
import React from 'react'
import Signin from "./Signin";

export default function Header(props) {
    const [buttonPopupUp,setButtonPopupUp] = useState(false)
    const [buttonPopupIn , setButtonPopupIn] = useState(false)
  return (
        <div className="main">
            <ul>
                <img src={logo}/>
                <p>ZapStore</p>
                <div className="list">
                <li><a href={props.idAb} >About Us</a></li>
                <li><a href={props.idPh}>Shop</a></li>
                <li><a href={props.idCo}>Contact Us</a></li>
                <Button variant="primary" onClick={()=> setButtonPopupIn(true)} className="su">Sign In</Button>
                <Button variant="primary" onClick={()=> setButtonPopupUp(true)}  className="si">Sign Up</Button>
                <Signup className="si" trigger={buttonPopupUp} setTrigger={setButtonPopupUp}>
                    <div className="sign">
                        <table>
                        <tbody>
                            <tr>
                                <td><span>Username:</span></td>
                                <td><input required placeholder="Username" type="text"/></td>
                            </tr>
                            <tr>
                                <td><span>Email:</span></td>
                                <td><input required placeholder="example@gmail.com" type="email"/></td>
                            </tr>
                            <tr>
                                <td><span>Password:</span></td>
                                <td><input required placeholder="Password"  type="password"/></td>
                            </tr>
                            <tr>
                                <td><span>Repeat Password:</span></td>
                                <td><input required placeholder="Retype Password" type="password"/></td>
                            </tr>
                            <tr>
                                <td><span>Phone Number:</span></td>
                                <td><input required placeholder="Phone number" type="number"/></td>
                            </tr>
                            <tr>
                                <td><input className="sub" placeholder="username" type="submit" value="submit" /></td>
                                <td><input type="reset" className="sub" value="Clear" /></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Signup>
                <Signin trigger={buttonPopupIn} setTrigger={setButtonPopupIn}>
                <div className="sign">
                        <table>
                            <tbody>
                            <tr>
                                <td><span>Email:</span></td>
                                <td><input required placeholder="example@gmail.com" type="email"/></td>
                            </tr>
                            <tr>
                                <td><span>Password:</span></td>
                                <td><input required placeholder="Password"  type="password"/></td>
                            </tr>
                            <tr>
                                <td><input className="sub" placeholder="username" type="submit" value="submit" /></td>
                                <td><input type="reset" className="sub" value="Clear" /></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Signin>
                </div>
            </ul>
        </div>
  )
}
