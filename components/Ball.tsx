import { useEffect, useRef } from "react";

const Ball = () => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        moveLeft();
      }
      if (e.key === "ArrowRight") {
        moveRight();
      }
    });
  }, []);

  const ballRef = useRef(null);

  const moveLeft = () => {
    console.log(getComputedStyle(ballRef.current));
    if (ballRef.current !== null) {
      const currentLeftPosition = parseInt(
        getComputedStyle(ballRef.current).getPropertyValue("left")
      );
      ballRef.current.style.left = currentLeftPosition - 2 + "px";
    }
  };

  const moveRight = () => {
    if (ballRef.current !== null) {
      const currentLeftPosition = parseInt(
        getComputedStyle(ballRef.current).getPropertyValue("left")
      );
      const currentRightPosition =
        ballRef.current.getBoundingClientRect().right;
      ballRef.current.style.right = currentRightPosition - 2 + "px";
      ballRef.current.style.left = currentRightPosition + 2 + "px";
      console.log(ballRef.current.style.right);
      console.log(ballRef.current.style.left);
    }
  };

  return (
    <div
      ref={ballRef}
      style={{
        width: "20px",
        height: "20px",
        background: "red",
        borderRadius: 5,
        position: "relative",
      }}
    ></div>
  );
};

export default Ball;
