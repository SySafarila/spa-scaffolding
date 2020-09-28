import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextProvider } from "./Contexts";
import Middleware from "./Middleware";
import Login from "./pages/Login";

const ReactRouter = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Middleware>
              <div>
                <p>Hello</p>
              </div>
            </Middleware>
          </Route>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default ReactRouter;
