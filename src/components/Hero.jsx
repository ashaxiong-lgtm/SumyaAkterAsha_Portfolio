function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-content">

        <p className="hero-small">
          Hello, I'm
        </p>

        <h1>
          AS<span>HA</span>
        </h1>

        <h2>
          CSE UNDERGRADUATE & ASPIRING WEB DEVOLOPER
        </h2>

        <p className="hero-description">
        Dedicated to the architecture of clean, useful, and visually compelling digital experiences. By engaging deeply with modern web technologies, a seamless bridge is built between sophisticated design and efficient functionality. Through a commitment to technical precision, environments are engineered to be both aesthetically pleasing and structurally sound.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
          <a
  href="/resume.pdf"
  className="btn btn-secondary"
  target="_blank"
  rel="noreferrer"
>
  View Resume
</a>

        </div>

        <div className="social-links">
          <a
            href="https://github.com/YOURUSERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;