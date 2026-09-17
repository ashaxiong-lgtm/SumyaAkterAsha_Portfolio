import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p>05 — CONTACT</p>
          <h2>Let's connect.</h2>
        </div>

        <p className="contact-description">
          Have a project idea or want to collaborate? Feel free to reach out.
        </p>

        <div className="contact-panel">
       <a
 href="https://mail.google.com/mail/?view=cm&fs=1&to=ashaxiong@gmail.com"
  className="contact-row"
  onClick={() => console.log("email clicked")}
>
            <div className="contact-row-icon">
              <HiOutlineMail />
            </div>
            <div className="contact-row-content">
              <span>Email</span>
              <strong>ashaxiong@gmail.com</strong>
            </div>
          </a>

          <a
            href="https://github.com/ashaxiong-lgtm"
            target="_blank"
            rel="noreferrer"
            className="contact-row"
          >
            <div className="contact-row-icon">
              <FaGithub />
            </div>
            <div className="contact-row-content">
              <span>GitHub</span>
              <strong>github.com/ashaxiong-lgtm</strong>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sumya-akter-asha-054081322"
            target="_blank"
            rel="noreferrer"
            className="contact-row"
          >
            <div className="contact-row-icon">
              <FaLinkedinIn />
            </div>
            <div className="contact-row-content">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/sumya-akter-asha-054081322</strong>
            </div>
          </a>

          <div className="contact-row">
            <div className="contact-row-icon">
              <HiOutlineLocationMarker />
            </div>
            <div className="contact-row-content">
              <span>Location</span>
              <strong>Dhaka, Bangladesh</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;