import React, { useEffect, useState, Fragment } from "react";
import { Circle } from "../model";
// import "./../styles/CirclesTask.css";

const CirclesTask = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  const handlePlaceCircle = (evt: React.MouseEvent) => {
    const { clientX, clientY } = evt;
    setCircles([...circles, { x: clientX, y: clientY }]);
    console.log(circles);
  };

  const handleUndoCircle = () => {
    const newCircles = [...circles];
    newCircles.pop();
    setCircles(newCircles);
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <button
        className="bg-info"
        style={{ marginTop: "120px" }}
        onClick={handleUndoCircle}
      >
        Undo Circle
      </button>
      <button
        className="bg-info ml-2"
        style={{ marginTop: "120px" }}
        onClick={handleUndoCircle}
      >
        Reset Circle
      </button>
      <div
        className="container"
        style={{ height: "100vh" }}
        onMouseDown={handlePlaceCircle}
      >
        {" "}
        {circles.map((circle, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              position: "absolute",
              left: circle.x + "px",
              top: circle.y + "px",
            }}
          >
            o
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CirclesTask;
