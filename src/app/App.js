import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
        <Route path={'/about'}>
          <About />
        </Route>
        <Route path={'/contact'}>
          <Contact />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
