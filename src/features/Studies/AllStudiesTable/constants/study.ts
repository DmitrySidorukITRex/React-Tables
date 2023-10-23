import { Study } from '../models/study';

export const ALL_STUDIES: Study[] = [
  {
    name: 'Kidney Study 25 - Mimetas Efflux Transporter Activity - TERT-OAT3',
    startDate: new Date('2022-05-02').toString(),
    type: 'CC',
    models: [
      'Kidney Proximal Tubule [384-well Static]',
      'Proximal Tubule/Vascular (Mimetas 3-lane)',
    ],
    points: 51,
    center: 'TEX-VAL',
  },
  {
    name: 'Quantitative analysis of Ca2+ signaling in SGm stimulated with ATP',
    startDate: new Date('2022-03-18').toString(),
    type: 'TOX',
    models: ['Salivary Gland', '[URochester]'],
    points: 585,
    center: 'SalGlandTC(UR)',
  },
  {
    name: 'Viability of hydrogel encapsulated AIDUCs',
    startDate: new Date('2022-03-17').toString(),
    type: 'TOX',
    models: ['Salivary Gland', '[URochester]'],
    points: 49,
    center: 'SalGlandTC(UR)',
  },
  {
    name: 'Gene expression of acinar cell marker Mist1',
    startDate: new Date('2022-03-03').toString(),
    type: 'TOX',
    models: ['Salivary Gland', '[URochester]'],
    points: 8,
    center: 'TEX-VAL',
  },
  {
    name: 'Liver_Mimetas 2-lane_Exp.13_iHep and NPCs with Trovafloxacin ± LPS_2nd',
    startDate: new Date('2022-02-11').toString(),
    type: 'TOX',
    models: ['Liver vs Mimetas 2-lane 2D', 'Mimetas 2-lane Liver Chip'],
    points: 482,
    center: 'SalGlandTC(UR)',
  },
];
