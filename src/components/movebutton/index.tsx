import React, { useState } from "react";

const MoveAwayButton = () => {
  const moveDistance = 250; // Distance to move the button in pixels
  const [position, setPosition] = useState({ top: 500, left: 760 });

  const calculateNewPosition = (top: number, left: number) => {
    const viewportWidth = window.innerWidth > 1200 ? 900 : window.innerWidth;
    const viewportHeight = window.innerHeight > 1000 ? 900 : window.innerHeight;
    const newTop = Math.max(
      0,
      Math.min(
        viewportHeight,
        top + (Math.random() > 0.5 ? moveDistance : -moveDistance)
      )
    );
    const newLeft = Math.max(
      0,
      Math.min(
        viewportWidth,
        left + (Math.random() > 0.5 ? moveDistance : -moveDistance)
      )
    );
    if (newTop > 900 || newLeft > 1200) {
      calculateNewPosition(newTop, newLeft);
    }

    if (newTop === position.top && newLeft === position.left) {
      calculateNewPosition(newTop, newLeft);
    }

    return { top: newTop, left: newLeft };
  };

  const moveButton = () => {
    // Calculate new position based on the current position and moveDistance
    document.getElementById("moveButton")?.classList.add("absolute");

    const { top, left } = calculateNewPosition(position.top, position.left);
    // console.log(top, left);
    setPosition({ top, left });
  };

  return (
    <div>
      <button
        id="moveButton"
        className=" border-2 text-[24px] font-medium border-black bg-[#FAFBF8] rounded-lg px-8 py-4 font-cute w-fit h-fit"
        style={{
          top: position.top,
          left: position.left,
          transition: "top 0.3s ease-out, left 0.3s ease-out",
        }}
        onMouseEnter={moveButton}
      >
        No !
      </button>
    </div>
  );
};

export default MoveAwayButton;
