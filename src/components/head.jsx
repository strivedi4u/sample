import React from 'react';
import "./assets/css/head.css";
import logo from "./assets/images/logo.jpg"
function Navbar(props) {
    return (
        <>
            <div class="container-fluid">
                <div class="row bg-light">
                    <div class="col-sm-4 col-5 img-fluid">
                        <img className='logo' src={logo} alt='logo' />
                    </div>
                    <div class="col-sm-8 col-7 mt-4">
                        <h2 className='heading'>
                       <b>k  KANPUR<br></br>KANPUR NAGAR, UTTAR PRADESH</b> </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;