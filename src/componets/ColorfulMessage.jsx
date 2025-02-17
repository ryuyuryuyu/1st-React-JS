
// コンポーネント化
// 引数で分割代入を使う方法
const ColorfulMessage = ({ color, children }) => {
    console.log("--ColorfulMessage--");
    // cssのオブジェクト
    const contentStyleA = {
        // プロパティと引数名が同名なら省略できので
        color,
        //color: color,
        fontSize: "18px",
        margin: 10,
    };

    return (
        <p style={contentStyleA}>{children}</p>
    )    
}
/*
    デフォルトエクスポート：
        呼び出す側は「{}」で定義せずに済み、別名をつけることが可能になる。
*/
export default ColorfulMessage;

// // 関数内で「props」を書きたくないとき
// export const ColorfulMessage = (props) => {
//     // 分割代入して変数で受け取る
//     const { color, children } = props;

//     // cssのオブジェクト
//     const contentStyleA = {
//         // プロパティと引数名が同名なら省略できので
//         color,
//         //color: color,
//         fontSize: "18px",
//         margin: 10,
//     };

//     return (
//         <p style={contentStyleA}>{children}</p>
//     )    
// }

// // 普通のpタグと同じような使い方に変形
// export const ColorfulMessage = (props) => {
//     // cssのオブジェクト
//   const contentStyleA = {
//       color: props.color,
//       fontSize: "18px",
//       margin: 10,
//   };

//   return (
//       <p style={contentStyleA}>{props.children}</p>
//   )    
// }

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