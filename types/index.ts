export interface Subject {
  id: string;
  name: string;
  grade: number | string;
  units: number | string;
}

export interface SubjectRowProps {
  subject: Subject;
  onUpdate: (id: string, field: keyof Subject, value: string | number) => void;
  onRemove: (id: string) => void;
}

export interface GwaResultProps {
  gwa: number;
  totalUnits: number;
  isHidden?: boolean;
  onShow?: () => void;
}

export interface ExportButtonsProps {
  subjects: Subject[];
  gwa: number;
  totalUnits: number;
}
