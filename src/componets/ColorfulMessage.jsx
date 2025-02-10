// コンポーネント化
// 普通のpタグと同じような使い方に変形
export const ColorfulMessage = (props) => {
    // cssのオブジェクト
  const contentStyleA = {
      color: props.color,
      fontSize: "18px",
      margin: 10,
  };

  return (
      <p style={contentStyleA}>{props.children}</p>
  )    
}

// <ColorfulMessage color="green" message="お元気ですか？"/>
//  という呼び出し方法は以下。
// export const ColorfulMessage = (props) => {
//     // cssのオブジェクト
//   const contentStyleA = {
//       color: props.color,
//       fontSize: "18px",
//       margin: 10,
//   };

//   return (
//       <p style={contentStyleA}>{props.message}</p>
//   )    
// }