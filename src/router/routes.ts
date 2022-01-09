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
];

export default routes;
