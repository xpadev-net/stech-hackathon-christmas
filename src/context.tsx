import { createContext, ReactNode } from "react";
import { Response } from "@/@types/response";

type context = {
  question?: Response;
  setQuestion?: (data?: Response) => void;
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
