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
import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  // num: stateとして使用する変数名
  // setNum: stateを変更するための関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [num]); // numを監視する->numが変更された時だけこのuseEffectを走らせる

  return (
    // javascriptの中にhtmlを書く　＝ JSX記法
    // jsx記法は一つのタグで囲う必要がある。
    // React.Fragmentを使うと一つのタグで囲う必要がなくなる
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on / off</button>
      <p>{num}</p>
      {/* &&の左の要素がtrueの時、右の要素を返す */}
      {faceShowFlag && <p>(^o^)</p>}
    </>
  );
};

// 他のファイルでも使えるようにする
export default App;

// onClickを押すと再レンダリング＝画面を再描画する
