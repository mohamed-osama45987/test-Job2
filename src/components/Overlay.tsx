interface overlayProps {
  startPosition: {
    x: number;
    y: number;
  };

  size: {
    width: number;
    height: number;
  };
}

const Overlay = ({ startPosition, size }: overlayProps) => {
  return (
    <div
      className="overlay absolute bg-black  border-2 border-white"
      style={{
        left: startPosition.x,
        top: startPosition.y,
        width: size.width,
        height: size.height,
      }}
    ></div>
  );
};

export default Overlay;
