import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import beachBanner from "../../images/beachBanner.jpeg"
import banner2 from "../../images/banner2.jpeg"
import banner3 from "../../images/banner3.jpeg"


import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="home-page-container">
            <nav className="navigation-bar">
                {/* might add nav component inside */}

            </nav>

            <div className="background-image-behind-search-bar">
                <img className="banner-image" src={require('../../images/banner3.jpeg')} />
            </div>

            <div className="kelp-logo">
                <a href="/">kelp</a>
            </div>

            <div className="search-bar">Find cool places near you</div>


            <h2>Your Next Beach Destination Awaits</h2>

            <div className="review-cards"></div>

            <div className="grey-footer"></div>
        </div>
    )
}

export default HomePage;
