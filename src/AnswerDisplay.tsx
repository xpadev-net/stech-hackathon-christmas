import { questionContext } from "@/context";
import { useCallback, useContext } from "react";
import Styles from "@/AnswerDisplay.module.scss";
import santaClaus from "@/assets/santaClaus.jpeg";

const AnswerDisplay = () => {
  const { question, setQuestion, setHistory } = useContext(questionContext);
  if (!question || !setQuestion || !setHistory || question.type === "question")
    return <></>;
  const reset = useCallback(() => {
    setQuestion();
    setHistory({});
  }, []);
  if (question.type === "answer") {
    return (
      <div className={Styles.wrapper}>
        <img src={santaClaus} alt={"サンタ"} />
        <h1 className={Styles.text}>
          あなたのイメージしたのは{question.name}ですか？
        </h1>
        <div className={Styles.buttons}>
          <button
            onClick={() => setQuestion({ type: "correct" })}
            className={Styles.button}
          >
            はい
          </button>
          <button
            onClick={() => setQuestion({ type: "giveUp" })}
            className={Styles.button}
          >
            いいえ
          </button>
        </div>
      </div>
    );
  } else if (question.type === "correct") {
    return (
      <div className={Styles.wrapper}>
        <img src={santaClaus} alt={"サンタ"} />
        <h1 className={Styles.text}>当たりました！</h1>
        <div className={Styles.buttons}>
          <button onClick={reset} className={Styles.button}>
            もどる
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={Styles.wrapper}>
      <img src={santaClaus} alt={"サンタ"} />
      <h1 className={Styles.text}>わかりませんでした</h1>
      <div className={Styles.buttons}>
        <button onClick={reset} className={Styles.button}>
          もどる
        </button>
      </div>
    </div>
  );
};
export { AnswerDisplay };
