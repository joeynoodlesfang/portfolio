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

            <div className="sidebar--content">
                <p className="sidebar--content-name">Joe Fang</p>
                <p className="sidebar--content-jobtitle">Software Developer</p>
                <p className="sidebar--content-section-title">About</p>
                <p className="sidebar--content-section-content">I am a developer with a strong background in IoT, AWS integration, and embedded systems, currently transitioning into software engineering to explore new opportunities. I’m passionate about building innovative solutions and constantly improving my skills in software development.</p>
                <p className="sidebar--content-section-title">Interests</p>
                <p className="sidebar--content-section-content">Reader. Traveler. Gamer. Just keep coding.</p>
            </div>
            {/* text in content a bit bigger */}
{/* add content box for sections */}
            <div className="sidebar--footer">
                {/* add email icon */}
                <img src={GithubIcon}/>
                <img src={LinkedInIcon} />
            </div>
        </div>
    )
}