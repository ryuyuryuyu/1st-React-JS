// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   // コンポーネントが２回レンダリングされる理由はココ。StrictModeかつ開発モードの時だけ２回連打レンダリングされる。
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// StrictModなしでの場合
root.render(
    <App />
);