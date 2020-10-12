import React, { Component } from 'react'
import '../StyleSheet/MainContent.scss'
import $ from 'jquery';
class MainContent extends Component{
    constructor(){
        super()
        this.state = {
            count_card : 20
        }
    }
    onClickType = (e) =>{
        console.log(e)
    }
    componentDidMount() {
        $('.category li').on('click', function(){
            // control category
            $('.category li').removeClass('active')
            $(this).toggleClass('active')
        })
        $('.content-popup-card li').on('click', function(){
            $('.content-popup-card li').removeClass('active')
            $(this).toggleClass('active')
        })
        document.addEventListener('mousedown', this.handClick, false);
        
    }
    componentDidUnmount() {
        document.removeEventListener('mousedown', this.handClick, false)
    }
    openMenubar = (item) => {
        if( document.getElementsByClassName('popup-card')[item].classList.contains('active')  ){
            document.getElementsByClassName('main-popup')[item].classList.remove('active')
            document.getElementsByClassName('popup-card')[item].classList.remove('active')
        }else{
            document.getElementsByClassName('main-popup')[item].classList.toggle('active')
            document.getElementsByClassName('popup-card')[item].classList.toggle('active')
        }
    }
    likeImage = (item) => {
        document.getElementsByClassName('la-heart')[item].classList.toggle('color-full')
    }
    handClick = (e) => {
        if($('.popup-card').hasClass('active') &&  !$('.popup-card *').is(e.target)) {
            $('.main-popup').removeClass('active')
            $('.popup-card').removeClass('active')
        }
    }
    componentCard = (item) =>{
        return(
                <div className='col is-6'>
                        <div className='card'>
                            <img src='https://i.pinimg.com/originals/1a/a8/49/1aa8495fe9870bff5ea5a7e663667348.jpg'></img>
                            <p>Skiing Holiday Part 1</p>
                            <div className=''>
                                <p>
                                    <i className='las la-heart' onClick={() => this.likeImage(item)}></i>
                                    255
                                </p>
                                <div className='main-popup'>
                                  <i className='fa fa-ellipsis-h headding' onClick={() => this.openMenubar(item)}>
                                </i>  
                                <div className='popup-card' >
                                <ul className='content-popup-card'>
                                        options    
                                    <li>
                                        <i className='las la-pen' ></i>
                                        Edit Photo
                                        <div className='boxeff'></div>
                                    </li>
                                    <li>
                                        <i className='las la-file-upload' ></i>
                                        Share Photo
                                    </li>
                                    <li>
                                        <i className='las la-sliders-h' ></i>
                                        Filters
                                    </li>
                                    <li>
                                        <i className='las la-trash-alt' ></i>
                                        Delete Photo
                                    </li>
                                </ul>
                            </div>
                        
                                </div>
                                
                                
                            </div>
                          
                        </div>
                    </div>
        )
    }
    createCard = () =>{
        let row = []
        for(var i = 0 ; i< this.state.count_card ; i++){
            row.push(this.componentCard(i))
        }
        return row
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
               <div className='body-content cols'>
                    {this.createCard()}
               </div>
            </div>
        )
    }
}
export default MainContent