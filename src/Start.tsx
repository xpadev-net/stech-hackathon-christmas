type props = {
  onClick: () => void;
};

const Start = ({ onClick }: props) => {
  return (
    <div>
      <button onClick={onClick}>開始する</button>
    </div>
  );
};
export { Start };
