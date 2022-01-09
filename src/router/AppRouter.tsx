import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import routes, { AppRoute } from "./routes";

const RouteWithSubRoutes = (route: AppRoute) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

const AppRouter = () => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </Router>
);

export default AppRouter;
