// Another component. 
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';


function App() {

  return (
    <Router>
      <div className="App ">
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Create" >
              <Create />
            </Route>
            <Route path="/blogs/:id" >
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
