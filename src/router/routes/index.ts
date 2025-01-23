import type {RouteComponent, RouteRecordRaw} from 'vue-router';

import { RouteName } from '@/constants';

import HomePage from '@/pages/home';

const ChatPage = (): Promise<RouteComponent> =>
  import(/* webpackChunkName: "chat-page" */ '@/pages/chat');

const NotFoundPage = (): Promise<RouteComponent> =>
  import(/* webpackChunkName: "something-wrong" */ '@/pages/not-found');
const ForbiddenPage = (): Promise<RouteComponent> =>
  import(/* webpackChunkName: "forbidden" */ '@/pages/forbidden');

export const routes: RouteRecordRaw[] = [
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
