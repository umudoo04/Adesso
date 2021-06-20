import Home from '@/views/home/';
import UnitsList from '@/views/units/list';
import UnitsView from '@/views/units/view';

export default [
  {
    path: '*',
    redirect: () => {
      return {
        name: 'home',
      };
    },
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      pageTitle: 'Home',
      requiresLogin: false,
      permissions: null,
    },
  },
  {
    path: '/units',
    name: 'unit-list',
    component: UnitsList,
    meta: {
      pageTitle: 'Units List',
      requiresLogin: false,
      permissions: null,
    },
  },
  {
    path: '/units/:unitId',
    name: 'unit-view',
    component: UnitsView,
    meta: {
      pageTitle: 'Unit View',
      requiresLogin: false,
      permissions: null,
    },
  },
];
