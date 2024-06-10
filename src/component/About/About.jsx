import'./About.css'  

import theme_pattern from '../../assets/theme_pattern.svg'

import profile_img from "../../assets/profliereal.jpg";



const About = () => {
  return (
    <div  id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className='para'>
        <p>
          I am an experienced build android application flutter 3 application
          practice project
        </p>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <h3>SKILL</h3>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
            </div>

            <div className="about-skill">
              <p>JAVASCRIPT</p>
            </div>
            <div className="about-skill">
              <p>DART</p>
            </div>
            <div className="about-skill">
              <p>TYPESCRIPT</p>
            </div>
            <div className="about-skill">
              <p>FLUTTER</p>
            </div>
            <div className="about-skill">
              <p>REACT</p>
            </div>
            <div className="about-skill">
              <p>NODEJS</p>
            </div>
            <div className="about-skill">
              <p>MONGODB</p>
            </div>
            <div className="about-skill">
              <p>SQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6</h1>
          <p>MONTH PRACTICE</p>
        </div>

        <div className="about-achievement">
          <h1>4</h1>
          <p>4 PROJECT COMPLETE</p>
        </div>
   
        <div className="about-achievement">
          <h1>3</h1>
          <p>PROJECT APPLITCATION</p>
        </div>
      </div>
    </div>
  );
}
export default About