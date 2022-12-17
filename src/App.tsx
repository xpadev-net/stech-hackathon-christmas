import { useState, useCallback } from "react";
import Styles from "./App.module.scss";
import { Start } from "@/Start";
import { QuestionContext } from "@/context";
import { QuestionDisplay } from "@/QuestionDisplay";
import { Response } from "@/@types/response";
import { Question } from "@/@types/question";

function App() {
  const [question, setQuestion] = useState<Response | undefined>();

  const init = useCallback(() => {
    (async () => {
      const question = /*サーバーから取ってくる*/ {
        type: "question",
        step: 0,
        name: "あ",
        choices: [
          { key: "1", name: "選択肢1" },
          { key: "2", name: "選択肢2" },
          { key: "3", name: "選択肢3" },
        ],
      } as Question;
      setQuestion(question);
    })();
  }, []);

  if (!question) return <Start onClick={init} />;

  return (
    <div className={Styles.wrapper}>
      <QuestionContext value={{ question, setQuestion }}>
        <QuestionDisplay />
      </QuestionContext>
    </div>
  );
}

export default App;
