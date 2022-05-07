import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import beachBanner from "../../images/beachBanner.jpeg"
import banner2 from "../../images/banner2.jpeg"
import banner3 from "../../images/banner3.jpeg"


import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="hp-home-page-container">
            <nav className="hp-navigation-bar">
                <div className="hp-nav-left-beaches-link"></div>
                <div className="hp-nav-right"></div>

            </nav>

            <div className="hp-background-image-behind-search-bar">
                <img className="hp-banner-image" src={require('../../images/banner3.jpeg')} />
            </div>

            <div className="hp-kelp-logo">
                <a className="hp-kelp-link" href="/">kelp</a>
            </div>

            <div className="hp-search-bar">Find cool places near you</div>


            <h2 className="hp-red-heading">Your Next Beach Destination Awaits</h2>

            <div className="hp-review-cards">
                <a className="hp-beach-card" href="#"></a>
                <a className="hp-beach-card" href="#"></a>
            </div>

            <div className="hp-grey-footer"></div>
        </div>
    )
}

export default HomePage;
