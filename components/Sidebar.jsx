import React from "react"
import GithubIcon from "/images/sidebar/GitHubIcon.svg"
import LinkedInIcon from "/images/sidebar/LinkedInIcon.svg"
import ProfileImage from "/images/sidebar/profile.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar--container">
            <div className="sidebar--profile">
                <img src={ProfileImage} className="sidebar--profile-image"/>
            </div>
            <div className="sidebar--footer">
                <img src={GithubIcon}/>
                <img src={LinkedInIcon} />
            </div>
        </div>
    )
}