import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import GridSystem from '@/views/GridSystem';
import GridListPage from '@/views/GridListPage';
import BreakPoints from '@/views/BreakPoints';
import Typography from '@/views/Typography';
import Tables from '@/views/Tables';
import Forms from '@/views/Forms';
import Buttons from '@/views/Buttons';
import Icons from '@/views/Icons';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage
  },
  {
    path: '/break-points',
    name: 'BreakPoints',
    component: BreakPoints
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
