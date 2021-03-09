import type { ApiRoute } from '../../types';
import { addUser } from './controller';

export const routes: ApiRoute[] = [
  {
    method: 'GET',
    path: '/users',
    handle: addUser,
  },
];
