import React, { Component } from 'react'

import '../StyleSheet/ViewScreen.scss'
import $ from 'jquery';
import ReactEcharts from 'echarts-for-react';
class ViewScreen extends Component {
    constructor(){
        super()
        this.state = {
            check_video : false
        }
    }
    componentDidMount(){
        $('.category li').on('click', function(){
            $('.category li').removeClass('active')
            $(this).toggleClass('active')
        })
        let slider = document.querySelector(".slider");
        if(slider.value === '50' && this.state.check_video === false){
            slider.value = 0
            this.setState({
                check_video : true
            })
        }
        let video
        video = document.querySelector(".video");
        video.ontimeupdate = function() {
            slider.value = (video.currentTime / video.duration) * 100
            if (this.currentTime == video.duration) {
                slider.value = 0;
                video.currentTime = 0;
                video.pause();
            }
        };
        $('.video').on('click', function(){
            let video = document.querySelector(".video")
            if (video.paused) {
                video.play()
              } else {
                video.pause()
            }
              $('.playPauseBtn').toggleClass('fa-play')
              $('.playPauseBtn').toggleClass('fa-pause')
        })
        $('.playPauseBtn').on('click', function(){
            let video = document.querySelector(".video");
            if (video.paused) {
                video.play();
              } else {
                video.pause();
            }
              $('.playPauseBtn').toggleClass('fa-play')
              $('.playPauseBtn').toggleClass('fa-pause')
        })
        $('.slider').on('input', function(){
            let slider = document.querySelector(".slider");
            let video = document.querySelector(".video")
            video.currentTime = (slider.value / 100) * video.duration
        })
        this.nextImage(1)
    }
    createEchart = () => {
        let option = {
            grid:{
                width:'100%',
                height:'100%',
                x:0,
                y2:0
            },
             xAxis: {
                 type: 'category',
                show:false
             },
             yAxis: {
                 type: 'value',
                   show:false,
             },
            series: [{
                   name: 'Series-1',
                   type: 'bar',
                   stack: '1',
                   data: [2, 2, 2, 2,],
                   color:'#baf7ff'
               },
               {
                   name: 'Series-3',
                   type: 'bar',
                   stack: '1',
                   data: [1, 2, 3, 5],
                   color:'#8cc8d3'
               }
              ]
         };
             return option        
     }
    nextImage = (index) => {
        if(index === 1){
            $('.control-video').toggleClass('active')
        }else{
            $('.control-video').removeClass('active')
        }
        $('.control-b-image li').removeClass('active')
        document.getElementsByClassName('control-b-image')[0].children[index-1].classList.toggle('active')
        document.getElementById('carousel-slide-activator-'+index).checked = true
    }
    render() {
        return (
            <div className='view-screen'>
               <div className='status'> 
                    <div>
                         <p className='heading-screen'>
                             <span>
                                87
                             </span>
                             <span>
                                 %
                             </span>
                         </p>
                    </div>
                    <div>
                        <p className='subheading-screen'>
                                <span><ReactEcharts option={this.createEchart()} className='box-chart' /></span>
                                <span>Weekly Likes</span>
                        </p>
                            
                    </div>
               </div>
               <input className='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'  checked></input >
                        <input className='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'  ></input >
                        <input className='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'  ></input >
                        <input className='carousel__activator' id='carousel-slide-activator-4' name='carousel' type='radio'  ></input >
                        <input className='carousel__activator' id='carousel-slide-activator-5' name='carousel' type='radio'  ></input >
               
               <div className='body-screen'>
                    <div className='item'>
                    <video src='https://vod-progressive.akamaized.net/exp=1603163738~acl=%2A%2F1313003841.mp4%2A~hmac=906f90910b8a7396f24ae26d3e8fb13b47d2662a7ef3b2af73ccb11e54ec3ed1/vimeo-prod-skyfire-std-us/01/1625/13/333126801/1313003841.mp4' className='video'/>
                   
                    </div>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
                    <div className='item'>
                        
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
               </div>
               <div className='control'>
                    <div className='control-video'> 
                        <i className='playPauseBtn fa fa-play '></i>   
                        <input type='range'  className='slider'  max='100'/>
                    </div>
                    <div>
                        <ul className='control-b-image'>
                            <li onClick={() => this.nextImage(1)} className='active'></li>
                            <li onClick={() => this.nextImage(2)}></li>
                            <li onClick={() => this.nextImage(3)}></li>
                            <li onClick={() => this.nextImage(4)}></li>
                            <li onClick={() => this.nextImage(5)} ></li>
                        </ul>
                    </div>
               </div>
            </div>
            
        )
    }
}
export default ViewScreen
