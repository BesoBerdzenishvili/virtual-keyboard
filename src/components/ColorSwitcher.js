import { useEffect, useState, useRef } from "react";
import { styled } from "../stitches.config";
import colorDb from "../colorsDb.json";

export const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const onMouseDown = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  });
  return domNode;
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "$black",
  maxWidth: 74,
  width: "100%",
  position: "fixed",
  top: 4,
  right: 8,
  paddingTop: 4,
  borderRadius: 10,
});

const ColorBox = styled("div", {
  marginBottom: 4,
  border: "1px solid black",
  borderRadius: 10,
  maxWidth: 64,
  width: "100%",
  height: 64,
  cursor: "pointer",
});
const Menu = styled("div", {
  maxWidth: 74,
  width: "100%",
  padding: 4,
  maxHeight: "71.8vh",
  overflow: "auto",
});

export default function ColorSwitcher({ color, setColor }) {
  const [showMenu, setShowMenu] = useState(false);

  const domNode = useClickOutside(() => {
    setShowMenu(false);
  });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const changeBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  const handleClick = (color) => {
    setColor(color);
    setShowMenu(false);
  };
  changeBodyColor(color);
  return (
    <Wrapper ref={domNode}>
      <ColorBox onClick={toggleMenu} style={{ backgroundColor: color }} />
      {showMenu && (
        <Menu>
          {colorDb.colors.map((i) => (
            <ColorBox
              key={i}
              onClick={() => handleClick(i)}
              style={{ boxShadow: `0px 0px 14px ${i}`, backgroundColor: i }}
            />
          ))}
        </Menu>
      )}
    </Wrapper>
  );
}
