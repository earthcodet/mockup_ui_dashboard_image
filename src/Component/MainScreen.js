import React, { Component } from 'react'
import '../StyleSheet/MainScreen.scss'
//Component
import '../StyleSheet/Main.scss'
import MainContent from './MainContent'
import Navbars from './Navbar'
import NavSidebarLeft from './NavSidebarLeft'
import NavSidebarRight from './NavSidebarRight'
import ViewScreen from './ViewScreen'
class MainScreen extends Component {
    render(){
        return(
            <div className='app-main'>
                {/* main */}
                <ViewScreen />
                <MainContent />

                {/* extension */}
                <Navbars />
                <NavSidebarLeft />
                <NavSidebarRight />
            </div>
        )
    }
}
export default MainScreen;