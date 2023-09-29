import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
} from 'shared/const/router';


export const routeConfig: Record<AppRoutes, {path: string, element: JSX.Element}> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
