import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Accueil} from './components'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Accueil />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
