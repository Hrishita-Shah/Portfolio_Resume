import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a 
                href="https://www.linkedin.com/in/hrishita-shah-8bb9b3228/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a 
                href="https://github.com/Hrishita-Shah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="fa fa-github"></i>
              </a>
              <a 
                href="https://www.instagram.com/hrishita_shah1393/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Hrishita</span>
            </span>
          </div>
          
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <TypeAnimation
                  sequence={[
                    "Revolutionize Your Web Journey 🤩",
                    2000,
                    "Fueling Web Innovation 😎",
                    2000,
                    "Full Stack Developer 💻",
                    2000,
                    "MERN Stack Dev ❤️",
                    2000,
                    "Transforming Web Dreams into Reality 😇",
                    2000,
                  ]}
                  repeat={Infinity}
                  cursor={true}
                />
              </h1>
              <span className="profile-role-tagline">
                Envisioning Web Elegance: Skillfulness in building applications
                with frontend and backend operations.
              </span>
            </span>
          </div>
          
          <div className="profile-options">
            <button 
              className="btn primary-btn" 
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="Resume_hrishita.pdf"
              download="Hrishita Resume_hrishita.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
