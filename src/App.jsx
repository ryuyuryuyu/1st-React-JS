// 拡張子「.jsx」：Reactのコンポーネントの意味を指す。
 export const App = () => {

  // 本関数内で使う関数をここで定義する
  const onClickButton = () => alert();

  // cssのオブジェクト
  const contentStyle = {
    color: "blue",
    fontSize: "36px",
    margin: 10,
  };

  // {} はJavaScriptで書くよ、という宣言。
  // アロー関数だった部分を上記に切り出した。この方が見やすい。
  return (
    <>
      <h1 style={contentStyle}>こんにちは</h1>
      <p>お元気ですか？</p>
      {console.log('hoge!')}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};