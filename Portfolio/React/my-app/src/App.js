import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Presentation, Projets, Competences, Activites, Resume} from './components'
import './resume.css'

//https://rapidapi.com/blog/how-to-deploy-a-react-app/

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Presentation />} />
          <Route path="/presentation" exact component={() => <Presentation />} />
          <Route path="/projets" exact component={() => <Projets />} />
          <Route path="/competences" exact component={() => <Competences />} />
          <Route path="/activites" exact component={() => <Activites />} />
          <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
