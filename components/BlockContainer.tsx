const BlockContainer = ({ blocks }) => {
  return <div>{blocks.map((block) => block)}</div>;
};

export default BlockContainer;
