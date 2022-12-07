import { useState } from "react";
import { styled, keyframes } from "../stitches.config";
import db from "../db.json";

const keyboardAnimation = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});
const Wrapper = styled("div", {
  textAlign: "center",
  backgroundColor: "$black",
  padding: "15px 0px",
  borderRadius: 10,
  animation: `${keyboardAnimation} 1s`,
});
const Button = styled("button", {
  backgroundColor: "$lightBlack",
  border: "none",
  borderRadius: 10,
  margin: "5px 8px",
  fontSize: 34,
  padding: "8px 16px",
  boxShadow: "0px 3px 2px black",
  cursor: "pointer",
  "&:active": {
    boxShadow: "0px 1px 1px black",
    position: "relative",
    top: 2,
  },

  variants: {
    space: {
      true: {
        maxWidth: 534,
        width: "100%",
        height: 54,
        position: "relative",
        top: 8,
        "&:active": {
          position: "relative",
          top: 10,
        },
      },
    },
  },
});
const copyMessageAnimation = keyframes({
  "60%": { opacity: 1 },
  "100%": { opacity: 0 },
});
const CopyMessage = styled("div", {
  backgroundColor: "$black",
  color: "white",
  textShadow: "0px 0px 14px white",
  maxWidth: 122,
  width: "100%",
  padding: "14px 0",
  border: "2px solid cyan",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 10,
  animation: `${copyMessageAnimation} 2s`,
});

export default function Keyboard({ setKeyboardText, text, textColor }) {
  const [caps, setCaps] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const typeText = (symbol) => {
    if (symbol === "backspace") {
      text.length && setKeyboardText((text) => text.slice(0, -1));
    } else if (symbol === "caps") {
      setCaps(!caps);
    } else if (symbol === "enter") {
      navigator.clipboard.writeText(text);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    } else {
      setKeyboardText(text + symbol);
    }
  };
  return (
    <Wrapper>
      {db.keys.map((i) => (
        <span key={i.symbol}>
          <Button
            onClick={() => typeText(caps ? i.cap : i.symbol)}
            space={i.symbol === " " && true}
            style={{
              color: textColor,
              textShadow: `0px 0px 14px ${textColor}`,
            }}
          >
            {caps ? i.cap : i.symbol}
          </Button>
          {(i.symbol === "backspace" ||
            i.symbol === "\\" ||
            i.symbol === "enter" ||
            i.symbol === "/") && <br />}
        </span>
      ))}
      {showMessage && <CopyMessage>copied</CopyMessage>}
    </Wrapper>
  );
}
