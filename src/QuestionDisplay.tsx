import {questionContext} from "@/context";
import { useContext } from "react";
import {Question} from "@/@types/question";

const QuestionDisplay = () => {
  const {question,setQuestion} = useContext(questionContext);
  if (!question||!setQuestion||question.type !== "question")return<></>;
  const update = async(key: string) => {
    const newQuestion = /*次の質問を取ってくる*/{type:"question",step:1,name: "い",choices:[{key:"1",name:"選択肢1"},{key:"2",name:"選択肢2"},{key:"3",name:"選択肢3"}]} as Question;
    setQuestion(newQuestion);
  }
  return <div>
    <h1>Q{question.step}. {question.name}</h1>
    {question.description&&<p>{question.description}</p>}
    {question.choices.map((choice)=>{
      return <button key={choice.key} onClick={()=>update(choice.key)}>{choice.name}</button>
    })}
  </div>
}
export {QuestionDisplay};