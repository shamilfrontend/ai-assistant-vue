import { RouteName } from '@/constants';
import HomePage from '@/pages/home';
const ChatPage = () => import(/* webpackChunkName: "chat-page" */ '@/pages/chat');
const NotFoundPage = () => import(/* webpackChunkName: "something-wrong" */ '@/pages/not-found');
const ForbiddenPage = () => import(/* webpackChunkName: "forbidden" */ '@/pages/forbidden');
export const routes = [
    {
        path: '/',
        name: RouteName.HOME,
        component: HomePage
    },
    {
        path: '/chat',
        name: RouteName.CHAT,
        component: ChatPage
    },
    {
        name: RouteName.NOT_FOUND,
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    },
    {
        name: RouteName.FORBIDDEN,
        path: '/forbidden',
        component: ForbiddenPage
    },
];
//# sourceMappingURL=index.js.map