import React, { Component } from 'react'
import '../StyleSheet/Main.scss'
import '../StyleSheet/Navber.scss'
import NavSidebarLeft from './NavSidebarLeft'
import NavSidebarRight from './NavSidebarRight'
import $ from 'jquery'
class Navbar extends Component {
    constructor(){
        super()
        window.addEventListener("resize", this.handClick);
    }
    componentDidMount(){
      this.handClick()
    }
    handClick = () =>{
        
        if (window.innerWidth <= 1500){
            console.log(window.innerWidth)
            this.onClickControlNavRight('open') 
       }
    }
    onClickControlNavRight = (kw) =>{
        if(window.innerWidth > 1024){
            if(kw === undefined){
                $('.main-navbar-right').toggleClass('hide')
                $('.main-content').toggleClass('hide-menu')
                $('.control').toggleClass('hide-menu')
            }else{
                if(!$('.main-navbar-right').hasClass('hide')){
                    $('.main-navbar-right').toggleClass('hide')
                    $('.main-content').toggleClass('hide-menu')
                    $('.control').toggleClass('hide-menu')
                }
            }
        }else{
            if(kw === undefined){
                $('.main-navbar-right').toggleClass('hide')
            }else{
                if(!$('.main-navbar-right').hasClass('hide')){
                    $('.main-navbar-right').toggleClass('hide')
                }
            }
        }
        
        
    }
    render() {
        return (
            <div >
                <div className='navbar'>
                    <div className='nav-logo'>
                        <p>
                            photolytics
                        </p>
                    </div>
                    <p>
                        <i class='las la-bars' onClick={() => this.onClickControlNavRight()}></i>
                    </p>
                </div>
                <NavSidebarLeft />
                <NavSidebarRight />
            </div>
        )
    }
}
export default Navbar;
