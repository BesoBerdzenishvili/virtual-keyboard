import { useEffect, useRef } from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  borderRadius: 10,
  padding: "14px 11px",
  backgroundColor: "$black",
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
