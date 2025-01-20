import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 関数で画面を追加していく
const App = () => {
  return (
    // h1,pタグだけではエラーになる。空タグ「<>」で囲ってあげる。（React.Fragmentタグ、Divタグで囲っていたこともある）
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// Strictmode：厳密に。エラーが出るようになる。
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
