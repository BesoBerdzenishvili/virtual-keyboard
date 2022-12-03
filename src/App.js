import { useState } from "react";
import Keyboard from "./components/Keyboard";

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      {text}
      <Keyboard setKeyboardText={setText} text={text} />
    </div>
  );
}

export default App;
