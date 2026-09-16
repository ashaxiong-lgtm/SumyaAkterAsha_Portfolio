const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        description: "Semantic structure and accessible web content."
      },
      {
        name: "CSS",
        description: "Responsive layouts, Flexbox, Grid and visual styling."
      },
      {
        name: "JavaScript",
        description: "Interactive behavior and DOM-based functionality."
      },
      {
        name: "React",
        description: "Reusable components and modern frontend development."
      },
      {
        name: "TypeScript",
        description: "Basic typed JavaScript for safer and clearer code."
      }
    ]
  },

  {
    title: "Programming",
    skills: [
      {
        name: "C / C++",
        description: "Programming fundamentals, logic and problem solving."
      },
      {
        name: "PHP",
        description: "Basic server-side scripting and web development."
      }
    ]
  },

  {
    title: "Database",
    skills: [
      {
        name: "SQL",
        description: "Database queries and relational database concepts."
      }
    ]
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control, repositories and project tracking."
      }
    ]
  },

  {
    title: "Others",
    skills: [
      {
        name: "OOP",
        description: "Classes, objects, inheritance and encapsulation."
      },
      {
        name: "DSA",
        description: "Data structures, algorithms and problem-solving concepts."
      },
      {
        name: "Computer Networking",
        description: "Basic networking concepts, protocols and communication models."
      }
    ]
  }
];

function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">

        <div className="section-heading">
          <p>02 — SKILLS</p>
          <h2>Technologies & knowledge.</h2>
        </div>

        <div className="skills-categories">

          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>

              <h3>{group.title}</h3>

              <div className="skill-items">

                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>

                    <h4>{skill.name}</h4>

                    <p>{skill.description}</p>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;