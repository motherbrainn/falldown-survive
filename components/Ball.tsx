import { useEffect, useRef } from "react";

const Ball = () => {
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const arrowLeftDown = useRef<boolean>(false);
  const arrowRightDown = useRef<boolean>(false);

  const setImmediate = (func: () => void, interval: number): NodeJS.Timer => {
    func();
    return setInterval(func, interval);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        if (e.repeat || arrowRightDown.current === true) return;
        arrowLeftDown.current = true;
        intervalRef.current = setImmediate(() => moveLeft(), 1);
      }
      if (e.key === "ArrowRight") {
        if (e.repeat || arrowLeftDown.current === true) return;
        arrowRightDown.current = true;
        intervalRef.current = setImmediate(() => moveRight(), 1);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft" && arrowLeftDown.current === true) {
        arrowLeftDown.current = false;
        intervalRef.current && clearInterval(intervalRef.current);
      }
      if (e.key === "ArrowRight" && arrowRightDown.current === true) {
        arrowRightDown.current = false;
        intervalRef.current && clearInterval(intervalRef.current);
      }
    });
  }, []);

  const ballRef = useRef<null | HTMLDivElement>(null);

  const moveLeft = () => {
    if (ballRef.current !== null) {
      const currentLeftPosition = parseInt(
        getComputedStyle(ballRef.current).getPropertyValue("right")
      );
      ballRef.current.style.right = currentLeftPosition + 2 + "px";
    }
  };

  const moveRight = () => {
    if (ballRef.current !== null) {
      const currentRightPosition = parseInt(
        getComputedStyle(ballRef.current).getPropertyValue("right")
      );
      ballRef.current.style.right = currentRightPosition - 2 + "px";
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
