import { ALL_STUDIES } from '../constants';
import { Study } from '../models';

const rows: Study[] = Array.from({ length: 308 }, () => {
  const randomSelection = ALL_STUDIES[Math.floor(Math.random() * ALL_STUDIES.length)];
  return randomSelection;
});

export const getAllStudies = () => {
  return new Promise<Study[]>((res, rej) => {
    setTimeout(() => res(rows), 1000);
  });
};
