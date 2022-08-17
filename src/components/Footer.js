import githubIcon from '../assets/images/githubicon.svg'
import linkedinIcon from '../assets/images/linkedinicon.svg'


const Footer = (props) => {

  return(
    <footer className="flex justify-content-center" >
      <a href="https://github.com/bmkersey">
        <img src={githubIcon}
          alt="github icon"
          
        />
      </a>
      <a href="https://linkedin.com/bmkersey">
        <img src={linkedinIcon}
          alt="linked icon"
          
        />
      </a>
    </footer>
  )
}


export default Footer