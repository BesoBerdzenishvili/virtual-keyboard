import { useState } from "react";
import { styled } from "./stitches.config";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";

const Wrapper = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1144,
  width: "100%",
});
function App() {
  const [text, setText] = useState("");
  return (
    <Wrapper>
      <Output text={text} />
      <br />
      <Keyboard setKeyboardText={setText} text={text} />
    </Wrapper>
  );
}

export default App;
