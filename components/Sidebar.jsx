import React, { useState } from "react"
import GithubIcon from "/images/sidebar/GitHubIcon.svg"
import LinkedInIcon from "/images/sidebar/LinkedInIcon.svg"
import ProfileImage from "/images/sidebar/profile.jpg"
import EmailIcon from "/images/sidebar/emailIcon.svg"
import ActiveEmailIcon from "/images/sidebar/activeEmailIcon.svg";


export default function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const [emailBtnTextColor, setEmailBtnTextColor] = useState("black");
    const [emailBtnBGColor, setEmailBtnBGColor] = useState("#FFFFFF");

    const handleMouseDown = () => {
        setIsActive(true);
        setEmailBtnTextColor("#FFFFFF");
        setEmailBtnBGColor("#0056B3");
    }
    const handleMouseUp = () => {
        setIsActive(false);
        setEmailBtnTextColor("black");
        setEmailBtnBGColor("#FFFFFF");
    }
    const handleMouseLeave = () => {
        setIsActive(false); 
        setEmailBtnTextColor("black");
        setEmailBtnBGColor("#FFFFFF");
    }

    const GithubAddr = "https://github.com/joeynoodlesfang";
    const LinkedInAddr = "https://www.linkedin.com/in/joe-fang-222b6a132/";
    return (
        <div className="sidebar--container">
            <div className="sidebar--profile">
                <img src={ProfileImage} className="sidebar--profile-image"/>
            </div>

            <div className="sidebar--content">
                <p className="sidebar--content-name">Joe Fang</p>
                <p className="sidebar--content-jobtitle">Software Developer</p>
                <div className="sidebar--email-button-container">
                    <a href="mailto:linzhoufang@gmail.com">
                        <button className="sidebar--email-button-button" 
                                title="email: linzhoufang@gmail.com" 
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    color: emailBtnTextColor,
                                    backgroundColor: emailBtnBGColor,
                                }}
                        >
                            <img src={isActive ? ActiveEmailIcon : EmailIcon} 
                                className=".sidebar--email-button-button-img"
                                alt="Email Icon"
                            />
                            <div className=".sidebar--email-button-button-text ">
                                Email
                            </div>
                        </button>
                    </a>
                </div>
                <div className="sidebar--content-textsection">
                    <p className="sidebar--content-textsection-title">About</p>
                    <div className="sidebar--content-textsection-content">
                        <p>I am a developer with a strong background in IoT, embedded systems, and firmware development, leveraging my expertise to pursue impactful opportunities in software engineering. </p>
                        <p>I’m passionate about building innovative solutions and constantly improving my skills in software development.</p>
                    </div>
                    {/* <p className="sidebar--content-section-title">Interests</p>
                    <div className="sidebar--content-section-content">
                        <ul>
                            <li>Reader</li>
                            <li>Traveler</li>
                            <li>Gamer</li>
                            <li>Keep on coding</li>
                        </ul>
                    </div> */}
                </div>
            </div>
{/* add content box for sections */}
            <div className="sidebar--footer">
                {/* add email icon */}
                <a href={GithubAddr} target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="{GithubAddr}" title={GithubAddr}/>
                </a>
                <a href={LinkedInAddr} target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt={LinkedInAddr} title={LinkedInAddr}/>
                </a>
            </div>
        </div>
    )
}