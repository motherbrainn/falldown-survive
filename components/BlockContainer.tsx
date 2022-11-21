interface BlockContainerProps {
  blocks: JSX.Element[];
}

const BlockContainer = ({ blocks }: BlockContainerProps) => {
  return <div id="block-container">{blocks.map((block) => block)}</div>;
};

export default BlockContainer;
