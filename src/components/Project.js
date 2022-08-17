


const Project = (props) => {
  const projects =['reCOMmend','Cloud Encounter','Tech Blog','Oh Snap']
  return(

    <div className="flex-row">
        {projects.map((project, i) => (
          <div key={project}>
            <h2><a href="www.google.com">{project}</a></h2>
            <img
              src={require(`../assets/images/Projects/${i}.png`)}
              alt={project}
              className="img-thumbnail mx-1"
              key={i}
            />
          </div>
        ))}
    </div>

  )
}

export default Project;