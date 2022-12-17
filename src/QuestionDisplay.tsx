import { questionContext } from "@/context";
import { useContext } from "react";
import Styles from "@/QuestionDisplay.module.scss";
import santaClaus from "@/assets/santaClaus.jpeg";
import { Answer } from "@/@types/answer";

const QuestionDisplay = () => {
  const { question, setQuestion, history, setHistory } =
    useContext(questionContext);
  if (
    !question ||
    !setQuestion ||
    !history ||
    !setHistory ||
    question.type !== "question"
  )
    return <></>;
  const update = /*async*/ (key: string) => {
    const newHistory = { ...history, [question.key]: key };
    const newQuestion = /*次の質問を取ってくる*/ {
      type: "answer",
      name: "hoge",
    } as Answer; /* {
      type: "question",
      step: 1,
      name: "い",
      choices: [
        { key: "1", name: "選択肢1" },
        { key: "2", name: "選択肢2" },
        { key: "3", name: "選択肢3" },
      ],
    } as Question; */
    setHistory(newHistory);
    setQuestion(newQuestion);
  };
  return (
    <div className={Styles.wrapper}>
      <img src={santaClaus} alt="サンタ" />
      <h1 className={Styles.question}>
        Q{question.step}. {question.name}
      </h1>
      {question.description && <p>{question.description}</p>}
      <div className={Styles.choices}>
        {question.choices.map((choice) => {
          return (
            <button
              key={choice.key}
              onClick={() => void update(choice.key)}
              className={Styles.choice}
            >
              {choice.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export { QuestionDisplay };
