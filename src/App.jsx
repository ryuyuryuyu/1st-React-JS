import { ColorfulMessage } from "./componets/ColorfulMessage";

// 拡張子「.jsx」：Reactのコンポーネントの意味を指す。
 export const App = () => {

  // 本関数内で使う関数をここで定義する
  const onClickButton = () => alert();



  // {} はJavaScriptで書くよ、という宣言。
  // アロー関数だった部分を上記に切り出した。この方が見やすい。
  return (
    <>
      <h1 style={{ color: "red"}}>こんにちは</h1>
      <ColorfulMessage color="green">"お元気ですか？"</ColorfulMessage>
      <ColorfulMessage color="orange">"元気です"</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};