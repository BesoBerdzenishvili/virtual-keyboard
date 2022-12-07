import { useEffect, useRef } from "react";
import { styled, keyframes } from "../stitches.config";

const outpuAnimation = keyframes({
  "0%": { opacity: 0, marginBottom: 444 },
  "100%": { opacity: 1, marginBottom: 0 },
});
const Wrapper = styled("div", {
  borderRadius: 10,
  padding: "14px 11px",
  backgroundColor: "$black",
  animation: `${outpuAnimation} 1s linear`,
});
const Screen = styled("div", {
  color: "$black",
  fontSize: 34,
  padding: "0 4px",
  minHeight: 46,
  maxHeight: 244,
  overflow: "auto",
  overflowX: "hidden",
  wordBreak: "break-all",
});

export default function Output({ text, screenColor }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);
  return (
    <Wrapper>
      <Screen
        style={{
          backgroundColor: screenColor,
          boxShadow: `0px 0px 14px ${screenColor}`,
        }}
      >
        {text}
        <div ref={bottomRef} />
      </Screen>
    </Wrapper>
  );
}
