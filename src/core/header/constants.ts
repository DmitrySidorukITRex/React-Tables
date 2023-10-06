import { NavigationItem } from './models';

export const NAVIGATION: NavigationItem[] = [
  {
    title: 'Studies',
    linksGroups: [
      { title: 'Study Data', links: [{ title: 'View All Studies', url: '' }] },
      { title: 'Study Components', links: [{ title: 'Study Components', url: '' }] },
      { title: 'Requires Permission', links: [{ title: 'Add Study', url: '' }] },
    ],
  },
  {
    title: 'Analysis',
    linksGroups: [
      { title: 'Study Data Analysis', links: [{ title: 'Graphing/Reproducibility', url: '' }] },
      { title: 'Compound Activities', links: [{ title: 'Heatmap', url: '' }] },
      { title: 'Computational Modeling', links: [{ title: 'PBPK', url: '' }] },
    ],
  },
  {
    title: 'Models',
    linksGroups: [
      { title: 'Model Data', links: [{ title: 'View Experimental Models', url: '' }] },
      { title: 'Requires Permission', links: [{ title: 'Add Experimental Model', url: '' }] },
    ],
  },
];
