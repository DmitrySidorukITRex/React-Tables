import { NavigationItem } from '../models/models';

export const NAVIGATION: NavigationItem[] = [
  {
    title: 'Studies',
    linksGroups: [
      { title: 'Study Data', links: [{ title: 'View All Studies', url: '/all-studies' }] },
      {
        title: 'Study Components',
        links: [{ title: 'Study Components', url: '/study-components' }],
      },
      { title: 'Requires Permission', links: [{ title: 'Add Study', url: '/add-study' }] },
    ],
  },
  {
    title: 'Analysis',
    linksGroups: [
      {
        title: 'Study Data Analysis',
        links: [{ title: 'Graphing/Reproducibility', url: '/graphing' }],
      },
      { title: 'Compound Activities', links: [{ title: 'Heatmap', url: '/heatmap' }] },
      {
        title: 'Computational Modeling',
        links: [{ title: 'PBPK', url: '/physiological-modeling' }],
      },
    ],
  },
  {
    title: 'Models',
    linksGroups: [
      {
        title: 'Model Data',
        links: [{ title: 'View Experimental Models', url: '/view-experimental-models' }],
      },
      {
        title: 'Requires Permission',
        links: [{ title: 'Add Experimental Model', url: '/add-experimental-models' }],
      },
    ],
  },
];
