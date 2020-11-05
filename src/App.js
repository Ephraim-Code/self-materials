import React, { Fragment } from 'react';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Navbar from './component/pages/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Info from './component/pages/Info';
import MainPage from './component/pages/MainPage';
import { FaDivide } from 'react-icons/fa';
import CourseForm from './course/CourseComponent/CourseForm';
import Footer from './component/pages/Footer';
const App = () => {
  return (
    <Fragment>
      <div className="main-content">
        <Router>
          <Navbar />
          <div>
            <Route exact path="/" component={MainPage} />
          </div>

          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/info/:id" component={Info} />
              <Route exact path="/courseform" component={CourseForm} />
            </Switch>
          </div>
        </Router>
      </div>
      <Footer className="footer" />
``
    </Fragment>

  )

}
export default App;