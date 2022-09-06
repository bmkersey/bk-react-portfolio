import bkAvatar from '../assets/images/bkAvatar.svg'

const Home = (props) =>{

  return (
    <main>
      <div className='container'>
        <div className='row '>
          <h1 className="col">Welcome to my React porfolio.</h1>
        </div>
        <div className='row '>
          <h2 className="col">Feel free to look around.</h2>
        </div>
        <div className='row '>
          <img src={bkAvatar} alt="Avatar of Brendan" className='col avatar'></img>
        </div>      
      </div>
    </main>
  )
}



export default Home;