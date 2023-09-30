
import { WordsPage } from 'pages/WordsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
} from 'shared/const/router';


export const routeConfig: Record<AppRoutes, {path: string, element: JSX.Element}> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <WordsPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
