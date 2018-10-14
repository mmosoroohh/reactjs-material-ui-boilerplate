import SimpleLineChart from '../components/Charts/SimpleLineChart';
import SimpleTable from '../components/Tables/SimpleTable';

const dashboardRoutes = [
  {
    path: '/charts',
    name: 'Simple Charts',
    component: SimpleLineChart
  },
  {
    path: '/tables',
    name: 'Simple Tables',
    component: SimpleTable
  }
];

export default dashboardRoutes;
