import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

import { Movies } from "./views/Movies";
import { Movie } from "./views/Movie";
import { MovieAppBar } from "./components/AppBar";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Router>
        <MovieAppBar />
        <Container style={{ padding: 20 }}>
          <Grid
            container
            spacing={4}
            justify="center"
            alignItems="center"
            style={{ minHeight: "400px" }}
          >
            <Switch>
              <Route path="/movies/:query">
                <Movies />
              </Route>
              <Route path="/movie/:id">
                <Movie />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </Router>
    </div>
  );
};

export default App;
