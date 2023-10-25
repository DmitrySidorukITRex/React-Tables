export interface Study {
  name: string;
  startDate: string;
  type: string;
  models: string[];
  points: number;
  center: string;
}

export interface StudyColumn {
  name: string;
  isSelected: boolean;
}
