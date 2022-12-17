import { questionContext } from "@/context";
import { useCallback, useContext } from "react";
import Styles from "@/AnswerDisplay.module.scss";
import santaClaus from "@/assets/santaClaus.jpeg";

const AnswerDisplay = () => {
  const { question, setQuestion } = useContext(questionContext);
  if (!question || !setQuestion || question.type === "question") return <></>;
  const reset = useCallback(() => {
    setQuestion();
  }, []);
  if (question.type === "answer") {
    return (
      <div className={Styles.wrapper}>
        <img src={santaClaus} alt={"サンタ"}/>
        <h1>あなたのイメージしたのは{question.name}ですか？</h1>
        <div className={Styles.buttons}>
          <button onClick={()=>setQuestion({type:"correct"})} className={Styles.button}>はい</button>
          <button onClick={()=>setQuestion({type:"giveUp"})} className={Styles.button}>いいえ</button>
        </div>
      </div>
    );
  }else if(question.type === "correct"){
    return (
      <div className={Styles.wrapper}>
        <img src={santaClaus} alt={"サンタ"}/>
        <h1>当たりました！</h1>
        <div className={Styles.buttons}>
          <button onClick={reset} className={Styles.button}>もどる</button>
        </div>
      </div>
    );
  }
  return (
    <div className={Styles.wrapper}>
      <img src={santaClaus} alt={"サンタ"}/>
      <h1>わかりませんでした</h1>
      <div className={Styles.buttons}>
        <button onClick={reset} className={Styles.button}>もどる</button>
      </div>
    </div>
  );
};
export { AnswerDisplay };
