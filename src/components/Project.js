


const Project = (props) => {
  // const projects =['reCOMmend','Cloud Encounter','Tech Blog','Oh Snap']
  const projects =[
    {
      name:"reCOMmend",
      link:"https://github.com/fpierreRun/reCOMmend"
    },
    {
      name:"Cloud Encounter",
      link:"https://benhuf.github.io/encounter-gen/"
    },
    {
      name:"Tech Blog",
      link:"https://github.com/bmkersey/tech-blog"
    },
    {
      name:"Oh Snap",
      link:"https://bmkersey.github.io/photo-port/"
    }
  ]
  return(

    <div className="row">
        {projects.map((project, i) => (
          <div key={project} className="col-4">
            
            <img
              src={require(`../assets/images/Projects/${i}.png`)}
              alt={project.name}
              className="img-thumbnail mx-1"
              key={i}
            />
            <h2><a href={project.link}>{project.name}</a></h2>
          </div>
        ))}
    </div>

  )
}

export default Project;