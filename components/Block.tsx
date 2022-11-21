interface BlockProps {
  id: number;
}

const Block = ({ id }: BlockProps) => {
  console.log(id);
  return <div id={`block-${id}`}>{`block: ${id}`}</div>;
};

export default Block;
