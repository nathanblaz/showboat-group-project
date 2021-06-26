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
                        <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/76574880?v=4" alt="Mel" />
                        <Link to="https://github.com/Melonnie13"> <i class="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/melonniehicks/"><i class="fab fa-linkedin"></i></Link>
                    </div>
                </li>
                <li className="about-li">
                    <p>Nick</p>
                    <div className="about-logos">
                        <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/75050631?v=4" alt="Nick" />
                        <Link to="https://github.com/NickKury"> <i class="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/nick-kury-011840213/"><i class="fab fa-linkedin"></i></Link>
                    </div>
                </li>
                <li className="about-li">
                    <p>Sarah</p>
                    <div className="about-logos">
                        <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/75630072?v=4" alt="Sarah"/>
                        <Link to="https://github.com/boothjacobs"> <i class="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/sarah-jacobs-53433923/"><i class="fab fa-linkedin"></i></Link>
                    </div>
                </li>
                <li className="about-li">
                    <p>Nate</p>
                    <div className="about-logos">
                        <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/24424412?v=4" alt="Nate"/>
                        <Link to="https://github.com/nathanblaz"> <i class="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/nathan-blaz-66489a8/"><i class="fab fa-linkedin" ></i></Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default AboutUs;
