import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextProvider } from "./Contexts";
import Middleware from "./Middleware";

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
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default ReactRouter;
