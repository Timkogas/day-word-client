
import { WordsPage } from 'pages/WordsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteWords,
    getRouteProfile,
    getRouteFavorites,
} from 'shared/const/router';
import { ProfilePage } from 'pages/ProfilePage';
import { FavoritesPage } from 'pages/FavoritesPage';


export const routeConfig: Record<AppRoutes, {path: string, element: JSX.Element}> = {
    [AppRoutes.MAIN]: {
        path: getRouteWords(),
        element: <WordsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
    },
    [AppRoutes.FAVORITES]: {
        path: getRouteFavorites(),
        element: <FavoritesPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
