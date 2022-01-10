import Dashboard from "../pages/Dashboard";
import Survey from "../pages/Survey";

export interface AppRoute {
  path: string;
  component: React.FC<{ routes?: AppRoute[] }>;
  routes?: AppRoute[];
}

const routes: AppRoute[] = [
  {
    path: "/questionnaire/:questionnaireId",
    component: Survey,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export default routes;
