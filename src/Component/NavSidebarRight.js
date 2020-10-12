import React, { Component } from 'react'
import '../StyleSheet/NavSideRight.scss'
import ReactEcharts from 'echarts-for-react';
class NavSidebarRight extends Component {
    getOption = (n) =>{
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        var data3 = []
        for (var i = 0; i < 40; i++) {
            let ran = Math.random() * 3
            if(i < 11){
                data1.push(i);
                data2.push(-i); 
            }else if(i > 31){
                data1.push(i-30);
                data2.push(-(i-30));  
            }else{
                data1.push(ran);
                data2.push(-(ran));  
            }
        }
        for (var i = 1; i < 9 ; i ++){
            if(i > 6){
                data3.push(i-2)
            }else{
                data3.push(i+5)
            }
        }
        let option_chart_2 = {
            grid:{
                width:'50%',

            },
            xAxis: {
                data: xAxisData,
                show:false
            },
            yAxis: {
                show:false
            },
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    stack: 'one',
                    data: data1,    
                    itemStyle: {
                        color: "rgba(255, 255, 255, 1)"
                    }
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    stack: 'one',
                    data: data2,
                    itemStyle: {
                    color: "rgba(255, 255, 255, 1)"
                    }
                }
            ]
        };
        let option_chart_3 = {
            xAxis: {
                type: 'category',
                show:false
            },
            yAxis: {
                show:false
            },
            series: [{
                data: data3,
                type: 'bar',
                itemStyle:{
                    color:'#FFF'
                }
            }]
        };
        

        switch(n){
            case 1 :
                return option_chart_2
            default :
                return option_chart_3
        }
    }
    render() {
        return(
            <div className='main-navbar-right'>
                <ul className='nav-right-content'>
                   <li>
                        <p>total views</p>
                        <div className='content-box'>
                            <p>424,762</p>
                            <i className='fas fa-caret-right'></i>  
                        </div>
                        
                   </li>
                   <li>
                        <p>top locations</p>
                        <ReactEcharts option={this.getOption(1)} className='box-chart' />
                       
                   </li>
                   <li>
                        <p>ec2 usage</p>
                        <ReactEcharts option={this.getOption(1)} className='box-chart' />
                   </li>
                   <li>
                        <p>monthly trend</p>
                        <ReactEcharts option={this.getOption(2)} className='box-chart' />
                   </li>
                   <li>
                        <p>View More</p>
                        
                   </li>
               </ul>
                <ul className='nav-right-content-social'>
                    <li>
                        <p>biggeset fans</p>
                        <ul>
                            <li>
                               <div className='cols'>
                                    <div className='col is-4'>
                                        <div className='status-online follow'></div>
                                    </div>
                                    <div className='col is-4'>
                                        <div className='profile-image'>
                                            <img src='https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg'></img>
                                        </div>
                                    </div>
                                    <div className='col is-2'>
                                       <p>
                                           <span>
                                               Adam D.
                                           </span>
                                           <span className='status-online-button follow'>
                                                Follow
                                           </span>
                                       </p>
                                    </div>
                               </div>
                            </li>
                            <li>
                            <div className='cols'>
                                    <div className='col is-4'>
                                        <div className='status-online removed'></div>
                                    </div>
                                    <div className='col is-4'>
                                        <div className='profile-image'>
                                            <img src='https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg'></img>
                                        </div>
                                    </div>
                                    <div className='col is-2'>
                                       <p>
                                           <span>
                                               Kelly J.
                                           </span>
                                           <span className='status-online-button removed'>
                                                Removed
                                           </span>
                                       </p>
                                    </div>
                               </div>
                            </li>
                            <li>
                            <div className='cols'>
                                    <div className='col is-4'>
                                        <div className='status-online unfollow'></div>
                                    </div>
                                    <div className='col is-4'>
                                        <div className='profile-image'>
                                            <img src='https://www.face-so.com/backoff/upload/files/1565941463_%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%AA%E0%B9%82%E0%B8%8B!%20%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3%20-%20FACE%20SO!.jpg'></img>
                                        </div>
                                    </div>
                                    <div className='col is-2'>
                                       <p>
                                           <span>
                                               Jenna O.
                                           </span>
                                           <span className='status-online-button unfollow'>
                                                Unfollow
                                           </span>
                                       </p>
                                    </div>
                               </div>
                            </li>
                            <li>
                            <div className='cols'>
                                    <div className='col is-4'>
                                        <div className='status-online follow'></div>
                                    </div>
                                    <div className='col is-4'>
                                        <div className='profile-image'>
                                            <img src='https://www.mypum.com/wp-content/uploads/2017/01/IMG_7521-min.jpg'></img>
                                        </div>
                                    </div>
                                    <div className='col is-2'>
                                       <p>
                                           <span>
                                               Abigail S.
                                           </span>
                                           <span className='status-online-button follow'>
                                                Follow
                                           </span>
                                       </p>
                                    </div>
                               </div>
                            </li>
                            <li>
                            <div className='cols'>
                                    <div className='col is-4'>
                                        <div className='status-online follow'></div>
                                    </div>
                                    <div className='col is-4'>
                                        <div className='profile-image'>
                                            <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/b939e13f-d9f8-43d9-983c-697a168cf49b-profile_image-300x300.png'></img>
                                        </div>
                                    </div>
                                    <div className='col is-2'>
                                       <p>
                                           <span>
                                               Deve M.
                                           </span>
                                           <span className='status-online-button follow'>
                                                Follow
                                           </span>
                                       </p>
                                    </div>
                               </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            activity stream
                        </p>
                        <ul>
                            <li>
                                <div className='cols'>
                                    <div className='col extra-is-1'>
                                        <div className='profile-image'>
                                            <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/b939e13f-d9f8-43d9-983c-697a168cf49b-profile_image-300x300.png'></img>
                                        </div>
                                    </div>
                                    <div className='col extra-is-2 detail-profile-comment'>
                                      <p>
                                            Deve M wrote a comment:
                                      </p>
                                    </div>
                                    <div className='col is-1 box-comment-detail'> 
                                        <p>
                                           Hey dude, how it going?  We should catch up soon ...
                                        </p>
                                    </div>
                                    <div className='col is-1 box-time-detail'> 
                                        <p>
                                          2 days ago
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className='cols'>
                                    <div className='col extra-is-1'>
                                        <div className='profile-image'>
                                            <img src='https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg'></img>
                                        </div>
                                    </div>
                                    <div className='col extra-is-2 detail-profile-comment'>
                                      <p>
                                            Adam D wrote a comment:
                                      </p>
                                    </div>
                                    <div className='col is-1 box-comment-detail'> 
                                        <p>
                                          Loving the HDRI effect. Keep up the great work!
                                        </p>
                                    </div>
                                    <div className='col is-1 box-time-detail'> 
                                        <p>
                                          4 days ago
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
} 
export default NavSidebarRight