import {useState, useCallback } from 'react';
import Styles from "./App.module.scss";
import {Question} from "@/@types/question";
import {Start} from "@/Start";

function App() {
  const [step,setStep] = useState(0);
  const [choice,setChoice] = useState<Question|undefined>();
  
  const init = useCallback(() => {
    (async()=>{
      setStep(0);
      const question = /*サーバーから取ってくる*/{step:0,name: "あ",choices:[{key:"1",name:"選択肢1"},{key:"2",name:"選択肢2"},{key:"3",name:"選択肢3"}]}
      setChoice(question);
    })();
  },[]);
  
  if (!choice)return <Start onClick={init}/>;
  
  return (
    <div className={Styles.wrapper}>
    
    </div>
  )
}

export default App
