import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/constants';

import ChatPage from '@/pages/chat';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.CHAT,
    component: ChatPage
  }
];
