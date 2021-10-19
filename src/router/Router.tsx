import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Notepad } from "../pages/Notepad";
import { PastArticles } from "../pages/PastArticles";
import { Page404 } from "../pages/Page404";

export const Router = () => 
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/notepad"
        render={({ match: { url } }) =>
            <Switch>
              <Route exact path={`${url}`}>
                <Notepad />
              </Route>
              <Route path={`${url}/pastarticles`}>
                <PastArticles />
              </Route>
              <Route path={`${url}/*`}>
                <Page404 />
              </Route>
            </Switch>}
      />
      <Route path="/*">
        <Page404 />
      </Route>
    </Switch>;