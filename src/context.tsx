import { createContext, ReactNode } from "react";
import { Response } from "@/@types/response";
import { History } from "@/@types/history";

type context = {
  question?: Response;
  setQuestion?: (data?: Response) => void;
  history?: History;
  setHistory?: (data: History) => void;
};

const questionContext = createContext<context>({});

type contextProps = {
  children: ReactNode;
  value?: context;
};

/**
 * @param props
 * @constructor
 */
const QuestionContext = (props: contextProps): JSX.Element => {
  return (
    <questionContext.Provider value={props.value || {}}>
      {props.children}
    </questionContext.Provider>
  );
};
export { QuestionContext, questionContext };
