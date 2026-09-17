const projects = [
  {
    title: "Personal Portfolio",
    type: "Web Development",
    description:
      "A responsive portfolio website built with React and modern CSS techniques to showcase my skills and projects.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/ashaxiong-lgtm/SumyaAkterAsha_Portfolio"
  },

  {
    title: "Expense Monitoring & Management System",
    type: "Database Project",
    description:
      "A database-driven system designed to manage and track expenses efficiently using structured data management.",
    technologies: ["SQL", "Database"]
  },

  {
    title: "Image Enhancement System",
    type: "Python Project",
    description:
      "A Python-based system developed to improve and process data using programming techniques.",
    technologies: ["Python"],
    github: "https://github.com/ashaxiong-lgtm/IMAGE_INHANCEMENT"
  },

  {
    title: "Assembly Calculator",
    type: "Low Level Programming",
    description:
      "A calculator application developed using assembly language concepts and low-level programming techniques.",
    technologies: ["Assembly 8086"],
    github: "https://github.com/ashaxiong-lgtm/AssemblyCode"
   
  },

  {
    title: "SmartSpend",
    type: "Full-Stact Development",
    description:
      "A stack management application developed using Express.js for handling system operations.",
    technologies: ["HTML","CSS","Javascript","Express.js", "Node.js","MySQL","Chart.js"],
    github: "https://github.com/ashaxiong-lgtm/SmartSpend"

  }
];


function Projects() {

  return (
    <section className="section section-alt" id="projects">

      <div className="container">


        <div className="section-heading">

          <p>03 — PROJECTS</p>

          <h2>
            Things I've built.
          </h2>

        </div>



        <div className="projects-grid">


          {projects.map((project, index) => (

            <article 
              className="project-card"
              key={project.title}
            >


              <div className="project-number">

                {String(index + 1).padStart(2,"0")}

              </div>



              <div className="project-content">


                <p className="project-type">
                  {project.type}
                </p>



                <h3>
                  {project.title}
                </h3>



                <p className="project-description">
                  {project.description}
                </p>



                <div className="project-tech">

                  {project.technologies.map((tech)=>(
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>



                <div className="project-links">


                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>


                </div>


              </div>


            </article>

          ))}


        </div>


      </div>


    </section>
  );
}


export default Projects;