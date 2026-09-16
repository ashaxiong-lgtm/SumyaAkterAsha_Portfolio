const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institute: "Southeast University",
    duration: "Jul 2023 – Present",
    result: "CGPA: 3.96"
  },

  {
    degree: "Higher Secondary Certificate - Science",
    institute: "Daud Public School and College",
    duration: "2020 – 2021",
    result: "GPA: 5.00"
  },

  {
    degree: "Secondary School Certificate - Science",
    institute: "Jashore Collectorate School & College",
    duration: "2018 – 2019",
    result: "GPA: 5.00"
  }
];


function Education(){

  return (

    <section className="section" id="education">

      <div className="container">


        <div className="section-heading">

          <p>04 — EDUCATION</p>

          <h2>
            Academic Background.
          </h2>

        </div>



        <div className="education-list">


          {education.map((item)=>(
            
            <div 
              className="education-card"
              key={item.degree}
            >

              <h3>
                {item.degree}
              </h3>


              <p className="education-institute">
                {item.institute}
              </p>


              <p className="education-duration">
                {item.duration}
              </p>


              <p className="education-result">
                {item.result}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}


export default Education;