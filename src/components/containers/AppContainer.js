import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  //withRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ErrorWrapper from "../shared/ErrorWrapper";
import NavigationNotifier from "../shared/NavigationNotifier";

import Header from "../shared/Header";
import Footer from "../shared/Footer";
import HomeContainer from "./HomeContainer";

import "../../sass/App.scss";

class AppContainer extends Component {

  render() {

    return (
      <div fluid="true" className="app-container">
        <ErrorWrapper>
          <Header />
          <NavigationNotifier>

              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <HomeContainer {...this.props} />}
                />

                <Route
                  path="/pagina-nao-encontrada"
                  render={() => <div>Página de erro</div>}
                />

                <Route
                  render={() => <Redirect to="/pagina-nao-encontrada" />}
                />

                <Redirect to="/" />
              </Switch>

          </NavigationNotifier>
          <Footer />
        </ErrorWrapper>
      </div>
    );
  }
}

export default AppContainer;
