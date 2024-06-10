
import './Contact.css'

import mail_icon from '../../assets/mail_icon.svg'
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p style={{ marginLeft: "28px" }}>nutthapong.ka1998@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p className='tel' style={{ marginLeft: "33px" }}> 086-3908935</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p style={{ marginLeft: "40px" }}> nan thailand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact