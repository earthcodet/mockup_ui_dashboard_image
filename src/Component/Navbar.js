import React, { Component } from 'react'
import '../StyleSheet/Main.scss'
import '../StyleSheet/Navber.scss'
class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
               <div className='nav-logo'>
                   <p>
                    photolytics
                   </p>
               </div>
               <p>
                   <i class='las la-bars'></i>
               </p>
            </div>
        )
    }
}
export default Navbar;
