import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Terms from './pages/Terms';
import WhitePaper from './pages/WhitePaper';
import Mint from './pages/Mint';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/terms" component={Terms} />
          <Route path="/whitepaper" component={WhitePaper} />
          <Route path="/mint" component={Mint} />
          <Redirect from='/' to='/' />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
