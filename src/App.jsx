import { useEffect, useState } from "react";
import ChangeMsgColor from "./componets/ColorfulMessage";
/*
  useState：
    コンポーネントの状態・情報のこと。
    例:
      ・エラーの有無
      ・モーダルが開いてる？
      ・ユーザーの入力内容
      ・APIから取得した内容
*/
/*
  Reactの再レンダリングされる条件：
    ・Stateが更新されたとき
    ・propsが更新されたとき
    ・子のコンポーネントは、親の再レンダリングに引きずられて再レンダリングされる。（させない方法はある。）
*/

// 拡張子「.jsx」：Reactのコンポーネントの意味を指す。
 export const App = () => {
  console.log("--App--");
  // 配列の分割代入でstateを受け取る。numの初期値は「useState(0)」の0。
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  // 本関数内で使う関数をここで定義する
  const onClickCountUp = () => {
    // prevには現在のnumが入る（バッチ処理）
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }
  /* 
    useEffect：
      マウント時のみ実行される。
      それ以降は第二引数に設定した値に変更があった場合のみ、実行される。
  */
  useEffect(() => {
    if (num > 0) {
      // ３の倍数のときだけ、顔文字が表示される
      if (num % 3 === 0){
        // trueなら何もしない（※無限ループ対策）
        isShowFace || setIsShowFace(true);
      } else {
        // falseなら何もしない（※無限ループ対策）
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);


  // {} はJavaScriptで書くよ、という宣言。
  // アロー関数だった部分を上記に切り出した。この方が見やすい。
  return (
    <>
      <h1 style={{ color: "red"}}>こんにちは</h1>
      <changeMsgColor color="green">お元気ですか？</changeMsgColor>
      <changeMsgColor color="orange">元気です</changeMsgColor>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>((ﾟдﾟ)！)</p>}
      
    </>
  );
};