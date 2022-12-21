import { Component } from "react";
import i14 from "./images/iphone14.png"
import i13 from "./images/iphone13.jpg"
import i12 from "./images/iphone12.jpg"
import $ from 'jquery';
import s21 from "./images/S21.jpg"
import s22 from "./images/S22.jpeg"
import s23 from "./images/S23.jpg"
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component{
    componentDidMount = () =>{
        $("#ipho14").on('click',function(){
                $("#para1").slideDown(500)
        })
        $("#ipho13").on('click',function(){
            $("#para2").slideDown(500)
        })
            $("#ipho12").on('click',function(){
                $("#para3").slideDown(500)
        })
        $("#sam23").on('click',function(){
            $("#para4").slideDown(500)
        })
        $("#sam22").on('click',function(){
            $("#para5").slideDown(500)
        })
        $("#sam21").on('click',function(){
            $("#para6").slideDown(500)
    })
    }
    render(){
        var clicked=false
        function trans(a){
           if(clicked==false){
               a.style.display="block"
               clicked=true
           }else if(clicked==true){
               a.style.display="none"
               clicked=false
           }
           
       }
        return(
           <div>
            <Header idAb={"#abt"} idPh={"#pho"} idCo={"#cnt"}/>
            <div className="about" id="abt">
                <h1>About Us</h1>
                    <div className="about-us">
                        <p>
                            Welcome to ZapStore.<br/>
                            ZapStore is an electronic shop of selling "Iphone" and "Samsung" phones.<br/>
                            You'll find the most known and popular phones here with their details.<br/>
                            Just click on the phone picture and you'll get the details.<br/>
                            Compare with every phone by its details and choose the one that satisfies you.<br/>
                            We guarantee you the best type of phones and original ones,NO FAKE QUALITIES.<br/>
                            If you have any question or you need any help , feel free to contact us here:<a href="#cnt"> Contact us</a><br/>

                        </p>
                    </div>
                    <hr/>
            </div>
            
            <div className="phones" id="pho">
                <h1>Apple Phones</h1>
                <div className="main-phone">
                    <div>
                        <h2>Iphone 14</h2>
                        <img className="iph14 ph" id="ipho14" onClick={() => trans(document.getElementById("para1"))} src={i14} />
                        <p id="para1">No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.</p>
                    </div>
                    <div>
                        <h2>Iphone 13</h2>
                        <img className="iph13 ph" id="ipho13" onClick={() => trans(document.getElementById("para2"))} src={i13} />
                        <p id="para2">No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.</p>
                    </div>
                    <div>
                        <h2>Iphone 12</h2>
                        <img className="iph12 ph" id="ipho12" onClick={() => trans(document.getElementById("para3"))} src={i12} />
                        <p id="para3">No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.</p>
                    </div>
                </div>
                <h1>Samsung Phones</h1>
                <div className="main-phone">
                    <div>
                        <h2>Samsung 23</h2>
                        <img className="sam23 ph" id="sam23" onClick={() => trans(document.getElementById("para4"))} src={s23} />
                        <p id="para4">No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.</p>
                    </div>
                    <div>
                        <h2>Samsung 22</h2>
                        <img className="sam22 ph" id="sam22" onClick={() => trans(document.getElementById("para5"))} src={s22} />
                        <p id="para5">No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.</p>
                    </div>
                    <div>
                        <h2>Samsung 21</h2>
                        <img className="sam21 ph" id="sam21" onClick={() => trans(document.getElementById("para6"))} src={s21} />
                        <p id="para6">No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.No content yet.</p>
                    </div>
                </div>
            </div>
            <div className="contact" id="cnt">
                <hr/>
                <h1>Contact Us</h1>
                    <form>
                        <span>Username:</span><br />
                            <input className="inp" type="text" placeholder="Username"/><br />
                        <span>Email:</span><br />
                            <input className="inp" type="email" placeholder="example@gmail.com"/><br />
                        <span>Type here:</span><br />
                            <textarea className="txtarea" cols="60" rows="5" placeholder="I need help in... , I want to ask about ..."/><br />
                            <input type="submit" value="submit" className="subco" />
                    </form>
            </div>
            <footer>
                <Footer idCo={"#cnt"} />
            </footer>
           </div> 
        )
    }
    
}
export default Main