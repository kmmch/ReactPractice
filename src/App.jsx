// reactのコンポーネントファイルは拡張子をjsxにするよい

/**
  コンポーネントの命名規則について
  １点補足として、コンポーネント名は必ず先頭を大文字から初めるようにする

  [正しい例]
    App
    SomeComponent（パスカルケース、推奨）
  
  [エラーとなる例]
    app
    someComponent

  [エラーにはならないが推奨されない例]
    Some_component
    Some_Component
 */
import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    // javascriptの中にhtmlを書く　＝ JSX記法
    // jsx記法は一つのタグで囲う必要がある。
    // React.Fragmentを使うと一つのタグで囲う必要がなくなる
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも使えるようにする
export default App;
