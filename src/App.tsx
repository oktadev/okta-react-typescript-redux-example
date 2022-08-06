import "./App.css";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import { useCallback } from "react";

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_OKTA_CLIENTID,
  redirectUri: process.env.REACT_APP_OKTA_BASE_REDIRECT_URI + "/login/callback",
});

function App() {
  const restoreOriginalUri = useCallback(
    async (_oktaAuth: OktaAuth, originalUri: string) => {
      window.location.replace(
        toRelativeUrl(originalUri || "/", window.location.origin)
      );
    },
    []
  );

  return (
    <Router>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Route path="/" exact={true} component={Home} />
        <SecureRoute
          path="/dashboard"
          exact={true}
          component={() => <Dashboard />}
        />
        <Route path="/login/callback" component={LoginCallback} />
      </Security>
    </Router>
  );
}

export default App;
