import { History } from "@/@types/history";
import { Response } from "@/@types/response";

const presents = [
  {
    title: "クリスマスケーキ",
    genre: ["食べ物", "甘い", "スイーツ", "分けて食べる"],
  },
  { title: "クッキー", genre: ["食べ物", "固い", "スイーツ", "焼き物"] },
  { title: "チキン", genre: ["食べ物", "肉", "焼き物"] },
  { title: "ピザ", genre: ["食べ物", "焼き物", "分けて食べる", "パンに似た"] },
  { title: "クリームシチュー", genre: ["食べ物", "スープ", "温かい"] },
  { title: "Switch", genre: ["ゲーム", "任天堂の機器", "ゲーム機器"] },
  {
    title: "マリオ",
    genre: ["ゲーム", "キノコが出てくる", "赤い帽子", "アクションゲーム"],
  },
  {
    title: "スプラトゥーン",
    genre: ["ゲーム", "イカ", "シューティングゲーム", "チーム戦"],
  },
  {
    title: "ポケットモンスター",
    genre: ["ゲーム", "ロールプレイング", "RPG", "モンスター"],
  },
  { title: "動物の森", genre: ["ゲーム", "かわいい", "動物", "生活する"] },
  {
    title: "漫画",
    genre: ["本", "絵があるもの", "海外人気が高い", "シリーズもの"],
  },
  { title: "絵本", genre: ["本", "絵があるもの", "子供向け", "かわいい"] },
  { title: "参考書", genre: ["本", "活字", "勉強"] },
];

const getQuestion = (history: History, step: number): Response => {
  console.log(history);
  const remain = presents.filter((item) =>
    history.reduce((pv, genre) => pv && item.genre.includes(genre), true)
  );
  if (remain.length < 1) {
    return { type: "giveUp" };
  } else if (remain.length === 1) {
    return { type: "answer", name: remain[0].title };
  }
  const genre = remain.reduce(
    (pv, item) => [
      ...pv,
      ...item.genre.filter((genre) => !history.includes(genre)),
    ],
    [] as string[]
  );
  const question = genre[Math.floor(Math.random() * (genre.length - 1))];
  return {
    type: "question",
    step: step + 1,
    name: question,
    choices: [
      { key: question, name: "はい" },
      { key: "", name: "いいえ" },
      { key: "", name: "わからない" },
    ],
  };
};

export { presents, getQuestion };
