import Menu from "./components/Menu/";
//pages
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

//data
import data from "./data.json";

//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const { about, experience, education, skills } = data;
  console.log(experience);
  return (
    <Router basename={'/react-cv'}>
      <div className="App">
        <Menu />
        <div class="container-fluid p-0">
          <section class="resume-section" id="about">
            <Switch>
              <Route exact path="/">
                <About data={about} />
              </Route>
              <Route exact path="/experience">
                <Experience data={experience} />
              </Route>
              <Route exact path="/education">
                <Education data={education} />
              </Route>
              <Route exact path="/skills">
                <Skills data={skills} />
              </Route>
              {/*<Route exact path="/contact">
                              <Contact />
                            </Route>*/}
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;