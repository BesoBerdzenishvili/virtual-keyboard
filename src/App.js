import { useState, useEffect } from "react";
import { styled } from "./stitches.config";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";
import ColorSwitcher from "./components/ColorSwitcher";

const Main = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1144,
  width: "100%",
});
function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState(() => {
    const saved = localStorage.getItem("color");
    return saved ? JSON.parse(saved) : "cyan";
  });

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(color));
  }, [color]);

  return (
    <div>
      <ColorSwitcher color={color} setColor={setColor} />
      <Main>
        <Output text={text} screenColor={color} />
        <br />
        <Keyboard setKeyboardText={setText} text={text} textColor={color} />
      </Main>
    </div>
  );
}

export default App;
