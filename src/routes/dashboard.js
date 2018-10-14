import SimpleLineChart from '../components/Charts/SimpleLineChart';
import SimpleTable from '../components/Tables/SimpleTable';

const dashboardRoutes = [
  {
    path: '/charts',
    name: 'Simple Charts',
    icon: 'face',
    color: 'primary',
    component: SimpleLineChart
  },
  {
    path: '/tables',
    name: 'Simple Tables',
    icon: 'dashboard',
    color: 'secondary',
    component: SimpleTable
  }
];

export default dashboardRoutes;
