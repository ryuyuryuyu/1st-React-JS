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