import React, { Component } from 'react'
import '../StyleSheet/MainScreen.scss'
//Component
import '../StyleSheet/Main.scss'
import MainContent from './MainContent'
import Navbars from './Navbar'
import ViewScreen from './ViewScreen'
class MainScreen extends Component {
    render(){
        return(
            <div className='app-main'>
                {/* main */}
                <div className='app-content'>
                    <ViewScreen />
                    <MainContent />
                </div>
                

                {/* extension */}
                <Navbars />
              
            </div>
        )
    }
}
export default MainScreen;