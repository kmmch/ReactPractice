import React from "react";
import ReactDom from "react-dom";

const App = () => {
  // javascriptの中にhtmlを書く　＝ JSX記法
  // jsx記法は一つのタグで囲う必要がある。
  // React.Fragmentを使うと一つのタグで囲う必要がなくなる
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
