const BlockContainer = ({ blocks }) => {
  console.log(blocks);
  return <div>{blocks.map((block) => block)}</div>;
};

export default BlockContainer;
