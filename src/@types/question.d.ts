export type Question = {
  type: "question";
  key: string;
  step: number;
  name: string;
  description?: string;
  choices: Choice[];
};
type Choice = {
  key: string;
  name: string;
};
