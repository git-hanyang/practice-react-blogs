import {Link} from 'react-router-dom'


function Navbar(){
  return(
    <>
    <nav className="navbar">
      This is the Navbar
    
    <div className="Links">
      <Link to='/'>Home</Link>
      <Link to='/create' style={{color:'white',backgroundColor:'black',borderRadius:'8px'}}>Create</Link>
    </div>
    
    </nav>
    </>
  )
}

export default Navbar