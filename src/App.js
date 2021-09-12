import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import City from './components/City';
import County from './components/County';
import State from './components/State';
import Media from './components/Media';
import Footer from './components/Footer';
import Info from './components/Info';
import Photo from './components/Photo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/city'} component={City} />
          <Route exact path={process.env.PUBLIC_URL + '/county'} component={County} />
          <Route exact path={process.env.PUBLIC_URL + '/state'} component={State} />
          <Route exact path={process.env.PUBLIC_URL + '/media'} component={Media} />
        </Switch>
      <Footer />
      </Router>
      <Info />
      <Photo />
      <div id="preload"></div>
    </>
  );
}

export default App;