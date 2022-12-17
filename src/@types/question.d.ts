export type Question = {
  step: number;
  name: string;
  description?: string;
  choices: Choice[];
}
type Choice = {
  key: string;
  name: string;
}