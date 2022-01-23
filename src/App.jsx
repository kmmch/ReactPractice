// reactのコンポーネントファイルは拡張子をjsxにするよい
import React from "react";

const App = () => {
  return (
    // javascriptの中にhtmlを書く　＝ JSX記法
    // jsx記法は一つのタグで囲う必要がある。
    // React.Fragmentを使うと一つのタグで囲う必要がなくなる
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// 他のファイルでも使えるようにする
export default App;
