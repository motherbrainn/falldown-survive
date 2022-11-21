import { useCallback, useEffect, useRef, useState } from "react";
import Ball from "./Ball";
import Block from "./Block";
import BlockContainer from "./BlockContainer";

interface PlaySpaceProps {
  generateBlocks?: boolean;
}

const PlaySpace = ({ generateBlocks = true }: PlaySpaceProps) => {
  const blockGeneratorIntervalId = useRef<null | NodeJS.Timer>(null);
  const key = useRef(0);
  const [blocks, setBlocks] = useState([
    <Block key={key.current} id={key.current} />,
  ]);

  const blockGenerator = useCallback(() => {
    if (generateBlocks === true) {
      blockGeneratorIntervalId.current = setInterval(() => {
        setBlocks((prevState) => {
          if (prevState.length > 9) {
            prevState.shift();
          }
          key.current += 1;
          return [...prevState, <Block key={key.current} id={key.current} />];
        });
      }, 1000);
    }
  }, [generateBlocks]);

  useEffect(() => {
    blockGenerator();
  }, [blockGenerator]);

  return (
    <div>
      <Ball />
      <BlockContainer blocks={blocks} />
    </div>
  );
};

export default PlaySpace;
