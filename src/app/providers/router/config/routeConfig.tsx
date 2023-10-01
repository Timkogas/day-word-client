
import { WordsPage } from 'pages/WordsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteWords,
    getRouteProfile,
} from 'shared/const/router';


export const routeConfig: Record<AppRoutes, {path: string, element: JSX.Element}> = {
    [AppRoutes.MAIN]: {
        path: getRouteWords(),
        element: <WordsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <NotFoundPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
