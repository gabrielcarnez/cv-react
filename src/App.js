import Menu from "components/Menu/";
import { useState, useEffect } from "react";
import Axios from "axios";
//pages
import About from "pages/About";
import Experience from "pages/Experience";
import Education from "pages/Education";
import Skills from "pages/Skills";
import Contact from "pages/Contact";

import menu from "menu.json";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    async function getData() {
      const text = await Axios.get("./data.json");
      const { data } = text;
      setdata(data);
    }
    getData();
  }, []);

  const { about, experience, education, skills } = data || {};

  return (
    <Router basename={"/react-cv"}>
      <div className="App">
        {data && <Menu data={about} menu={menu} />}
        <div className="container-fluid p-0">
          <section className="resume-section" id="about">
            <Switch>
              <Route exact path="/">
                {data && <About data={about} />}
              </Route>
              <Route exact path="/experience">
                {data && <Experience data={experience} />}
              </Route>
              <Route exact path="/education">
                {data && <Education data={education} />}
              </Route>
              <Route exact path="/skills">
                {data && <Skills data={skills} />}
              </Route>
              <Route exact path="/contact">
                {data && <Contact />}
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
