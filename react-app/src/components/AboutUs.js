import React from "react";
import {Link} from "react-router-dom"

const AboutUs = () => {
    return (
        <div id="about-sidebar">
            <h3>Built by</h3>
            <ul id="about-list">
                <li className="about-li">
                    <p>Mel</p>
                    <div className="about-logos">
                        <a href="https://melonnie13.github.io/" target="_blank"> <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/76574880?v=4" alt="Mell"/> </a>
                        <a href="https://github.com/Melonnie13" target="_blank"> <i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/melonniehicks/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </li>
                <li className="about-li">
                    <p>Nick</p>
                    <div className="about-logos">
                        <a href="https://nickkury.github.io/" target="_blank"> <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/75050631?v=4" alt="Nick"/> </a>
                        <a href="https://github.com/NickKury" target="_blank"> <i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/nick-kury/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </li>
                <li className="about-li">
                    <p>Sarah</p>
                    <div className="about-logos">
                        <a href="https://boothjacobs.github.io/" target="_blank"> <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/75630072?v=4" alt="Sarah"/> </a>
                        <a href="https://github.com/boothjacobs" target="_blank"> <i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sarah-jacobs-53433923/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </li>
                <li className="about-li">
                    <p>Nate</p>
                    <div className="about-logos">
                        <a href="https://nathanblaz.github.io/" target="_blank"> <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/24424412?v=4" alt="Nate"/> </a>
                        <a href="https://github.com/nathanblaz" target="_blank"> <i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/nathan-blaz-66489a8/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default AboutUs;
