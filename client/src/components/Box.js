import React from 'react';
import '../css/Box.css';

const Box = (props) => {
  const { canvasRef, onMouseDown, onMouseUp, onMouseMove, width, height } =
    props;

  return (
    <div className="box" style={{ width: width, height: height }}>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Box;
