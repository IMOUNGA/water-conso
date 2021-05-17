import React from 'react';
import IMG_GOUTTE from '../assets/goutte-d_eau-64px.png'

class Navbar  extends React.Component {


    render() {
        return (
            <div className="navbar-wrapper">
                <img src={IMG_GOUTTE} alt="Logo WaterCaillou"/>
                <h1>WaterCaillou 134</h1>
            </div>
        )
    }
}

export default Navbar;