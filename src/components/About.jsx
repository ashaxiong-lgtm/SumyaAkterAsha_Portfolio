function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">

        <div className="section-heading">
          <p>01 — ABOUT</p>
          <h2>A little Personal Overview.</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm a Computer Science and Engineering student with
              a strong interest in web development and software
              engineering.
            </p>

            <p>
             My primary focus lies in understanding how technology operates and transforming ideas into clean, useful, and visually appealing digital experiences.
            </p>

            <p>
             Technical proficiencies in React, JavaScript, HTML, CSS, and other programming technologies are continuously being refined through both academic coursework and hands-on personal projects.
            </p>
          </div>

          <div className="about-info">

            <div className="info-item">
              <span>Location</span>
              <strong>Bangladesh</strong>
            </div>

            <div className="info-item">
              <span>Degree</span>
              <strong>BSc in CSE</strong>
            </div>

            <div className="info-item">
              <span>Focus</span>
              <strong>Web Development</strong>
            </div>

            <div className="info-item">
              <span>Status</span>
              <strong>Student</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;