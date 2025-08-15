import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (!props || !props.id || screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "C", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 75 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "MySQL", ratingPercentage: 90 },
    
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "July", toDate: "2023" },
      description:
        "Developed an Interactive and Fully Responsive Portfolio Website with Email Capability.",
      subHeading: "Technologies Used: React JS, Bootstrap, RxJS, NodeJS.",
    },
    {
      title: "Movie Recommendation System",
      duration: { fromDate: "June", toDate: "2023" },
      description:
        "Designed an ML Project on a content-based filtered movie recommender system using cosine similarity",
      subHeading:
        "Technologies Used:  Python: Streamlit, Panda, Numpy, Requests libraries.",
    },
    {
      title: "Operating System Simulation GUI - Banker’s Algorithm",
      duration: { fromDate: "May", toDate: "2022" },
      description:
        "Banker’s Algorithm: resource allocation and deadlock detection for optimal OS performance.",
      subHeading:
        "Technologies Used: HTML, CSS, JavaScript.",
    },
    {
      title: "Perusing the Indian Aviation Industry",
      duration: { fromDate: "April", toDate: "2023" },
      description:
        "A static website made to show the comprehensive study of the Indian aviation industry and its conclusions",
      subHeading:
        "Technologies Used: HTML5, CSS3, Bootstrap, Tableau.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Institute of Technology Karnataka, Surathkal"}
        subHeading={"Bachelor of Technology in Computer Science and Engineering"}
        fromDate={"2021"}
        toDate={"2025"}
      />

      <ResumeHeading
        heading={"Delhi Public School, Vindhyanagar, Madhya Pradesh"}
        subHeading={"The Higher Secondary Education"}
        fromDate={"2016"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Oxford Public School, Ranchi, Jharkhand"}
        subHeading={"The Secondary Stage Education"}
        fromDate={"2015"}
        toDate={"2012"}
      />
      <ResumeHeading
        heading={"Shalini Convent School, Raigarh, Chhattisgarh"}
        subHeading={"The Primary Stage Education"}
        fromDate={"2011"}
        toDate={"2005"}
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Chess"
        description="Chess holds a special allure for me. I love it cause it's challenging and improves my strategy and decision-making skills. I enjoy studying and improving my tactics to become a better player. Engaging in a chess game is enjoyable and valuable mental agility and foresight exercises."
      />
      <ResumeHeading
        heading="Novel"
        description="Books have the enchanting ability to transport me to different worlds and offer me new perspectives. Reading complements my interest in technology and provides a well-rounded escape from reality."
      />
      <ResumeHeading
        heading="Community Service"
        description="Through NCC, I contribute to society by fostering leadership, discipline, and civic values in young individuals. By participating in community service and awareness activities, I aim to make a positive impact and promote a sense of responsibility towards society."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
