import { ALL_STUDIES } from '../constants/study';
import { Study } from '../models/study';

const rows: Study[] = Array.from({ length: 5008 }, () => {
  const randomSelection = ALL_STUDIES[Math.floor(Math.random() * ALL_STUDIES.length)];
  return randomSelection;
});

export const getAllStudies = () => {
  return new Promise<Study[]>((res) => {
    setTimeout(() => res(rows), 1000);
  });
};
