


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

    <div className="flex-row">
        {projects.map((project, i) => (
          <div key={project}>
            <h2><a href={project.link}>{project.name}</a></h2>
            <img
              src={require(`../assets/images/Projects/${i}.png`)}
              alt={project.name}
              className="img-thumbnail mx-1"
              key={i}
            />
          </div>
        ))}
    </div>

  )
}

export default Project;