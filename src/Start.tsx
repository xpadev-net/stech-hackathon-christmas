import Styles from "@/Start.module.scss";
import SantaClaus from "@/assets/santaClaus.jpeg";

type props = {
  onClick: () => void;
};

const Start = ({ onClick }: props) => {
  return (
    <div className={Styles.wrapper}>
      <h1>サンタネーター</h1>
      <img src={SantaClaus} alt={"サンタ"} className={Styles.img}/>
      <button onClick={onClick} className={Styles.button}>はじめる</button>
    </div>
  );
};
export { Start };
