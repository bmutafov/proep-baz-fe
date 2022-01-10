import Dashboard from "../pages/Dashboard";
import Page404 from "../pages/Page404";
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
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
