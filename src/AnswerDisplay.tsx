import { questionContext } from "@/context";
import { useCallback, useContext } from "react";

const AnswerDisplay = () => {
  const { question, setQuestion } = useContext(questionContext);
  if (!question || !setQuestion || question.type === "question") return <></>;
  const reset = useCallback(() => {
    setQuestion();
  }, []);
  if (question.type === "answer") {
    return (
      <div>
        <h1>あなたのイメージしたのは{question.name}です</h1>
        <button onClick={reset}>もどる</button>
      </div>
    );
  } else if (question.type === "giveUp") {
    return (
      <div>
        <h1>わかりませんでした</h1>
        <button onClick={reset}>もどる</button>
      </div>
    );
  }
};
export { AnswerDisplay };
