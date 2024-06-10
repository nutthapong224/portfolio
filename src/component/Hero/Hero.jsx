import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profliereal.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    
    const link = document.createElement("a");
    link.href = "/resume.pdf"; 
    link.download = "Nutthapong_Kanna_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        I'm Nutthapong Kanna, a Flutter developer and web developer in Thailand
      </h1>
      <p>
        This is my portfolio website showcasing projects I have worked on,
        preparing for an internship.
      </p>
      <div className="hero-action">
        <button className="hero-resume" onClick={handleResumeDownload}>
          My resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
