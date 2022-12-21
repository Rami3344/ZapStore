import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className='part1'>
                    <h2>Our social media accounts:</h2>
                    <SocialIcon className='social-ic' url="https://facebook.com" />
                    <SocialIcon className='social-ic' url="https://instagram.com" />
                    <SocialIcon className='social-ic' url="https://twitter.com" />
                    <SocialIcon className='social-ic' url="https://discord.com" />
                </div>
                <div className='part2'>
                    <h2>Our email:</h2>
                    <h2 className='det'>soon@gmail.com</h2>
                    <h2>Our phone number:</h2>
                    <h2 className='det'>+99.99999999</h2>
                    <h2>For any help, Contact us:</h2>
                    <a className='det' href={this.props.idCo}>Contact us</a>
                </div>
                
            </div>
        )
    }
}
export default Footer