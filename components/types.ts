import { ReactNode } from "react";

export interface experienceType {
  title: string;
  company: string;
  date: string;
}
export interface educationType {
  title: string;
  teacher: string;
  date: string;
}
export interface aboutType {
  title: string;
  description: string;
}

export interface skillsType {
  title: string;
  icon: ReactNode;
}
