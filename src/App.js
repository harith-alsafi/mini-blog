// import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


// this is JSX template which is the converted by bable to HTML 
function App() {
  return (
    <Router> {/* This makes all sub componets have access to router */}
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch> 
            
            <Route exact path="/"> 
              <Home/>
            </Route>

            <Route path="/create"> 
              <Create/>
            </Route>

            {/* Route the blog ID (:id is a parameter) */}
            <Route path="/blogs/:id"> 
              <BlogDetails/>
            </Route>

            {/* Any other route */}
            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

// this exports our function so other apps use it  
export default App;
