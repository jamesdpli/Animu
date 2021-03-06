import './banner.css';
import { Link } from "react-router-dom";
import { useState } from 'react';


const Banner = () => {


    const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

    return (
    <header
        className="banner"
        style={{
        backgroundSize: "cover",
        backgroundImage: "url(https://wallpaperaccess.com/full/6384210.jpg)",
        backgroundPosition: "center, center",
        }}>
        <div className="banner-contents">
        <h1 className="banner-title">Explore Anime</h1>
        <div className="banner-buttons">
            {/* <button className="banner-button">Play</button> */}
            

            <Link to={'/userWatchList'}><button className="banner-button">My List</button></Link>

        </div>
        <h1 className="banner-description">
            {truncate('', 150)}
        </h1>
        </div>

        <div className="banner--fadeButtom" />
    </header>
    );
};

export default Banner;
