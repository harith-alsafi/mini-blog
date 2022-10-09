import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>Mini Blog</h1>
        <div className="links">
            <Link to="/mini-blog/">Home</Link>
            <Link to="/mini-blog/create">New Blog</Link>
        </div>
    </nav>
    );
}
  
export default Navbar;

