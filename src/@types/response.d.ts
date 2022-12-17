import { Answer, GiveUp, Correct } from "@/@types/answer";
import { Question } from "@/@types/question";

export type Response = Answer | GiveUp | Question | Correct;
