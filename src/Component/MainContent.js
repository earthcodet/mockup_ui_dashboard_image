import React, { Component } from 'react'
import '../StyleSheet/MainContent.scss'
import $ from 'jquery';
class MainContent extends Component{
    onClickType = (e) =>{
        console.log(e)
    }
    componentDidMount() {
        $('.category li').on('click', function(){
            $('.category li').removeClass('active')
            $(this).toggleClass('active')
            
        })
        document.addEventListener('mousedown', this.handClick, false);
    }
    componentDidUnmount() {
        document.removeEventListener('mousedown', this.handClick, false)
    }
    handClick = (e) => {
        // if ($('.popup-notification').hasClass('popup-notification-active') && !this.bell_body.contains(e.target) || this.bell.contains(e.target)) {
        //     $('.popup-notification').toggleClass('popup-notification-active')
        // }
        // 
    }
    
    render() {
        return (
            <div className='main-content'>
               <div className='heading-content'> 
                   <p>
                       <i className= 'fas fa-caret-down'></i>
                        portfolio
                   </p>
                   <ul className='category'>
                       <li>
                            <p>Date</p>
                       </li>
                       <li>
                            <p>Likes</p>
                       </li>
                       <li className='active'>
                            <p>Views</p>
                       </li>
                       <li>
                            <p>Comments</p>
                       </li >
                       <li>
                            <p>Shared</p>
                       </li>
                   </ul>
               </div>
            </div>
        )
    }
}
export default MainContent