import { ReactNode } from "react";

export type CourseGoalArr = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalListProp = {
  goals: CourseGoalArr[];
  onDeleteGoal: (id: number) => void;
};

export type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

export type InfoBoxProps = HintBoxProps | WarningBoxProps;
