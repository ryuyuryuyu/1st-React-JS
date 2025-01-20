// 拡張子「.jsx」：Reactのコンポーネントの意味を指す。
 export const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
      {console.log('hoge!')}
      <button onClick={() => alert()}>ボタン</button>
    </>
  );
};