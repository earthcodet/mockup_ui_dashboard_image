import React, { Component } from 'react'

import '../StyleSheet/ViewScreen.scss'
class ViewScreen extends Component {
    render() {
        return (
            <div className='view-screen'>
               <div className='status'> 
                   87%
               </div>
               <div className='body-screen'>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
               </div>
            </div>
            
        )
    }
}
export default ViewScreen
