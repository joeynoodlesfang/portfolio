import React from "react"
import GithubIcon from "/images/GithubIcon.svg"
import LinkedInIcon from "/images/LinkedInIcon.svg"

export default function Sidebar() {
    return (
        <div className="sidebar--container">
            <p>test</p>
            <div className="sidebar--footer">
                <img src={GithubIcon}/>
                <img src={LinkedInIcon} />
            </div>
        </div>
    )
}