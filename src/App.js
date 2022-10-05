// import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';

// this is JSX template which is the converted by bable to HTML 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

// this exports our function so other apps use it  
export default App;
