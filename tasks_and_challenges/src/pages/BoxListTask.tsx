import React, { useEffect, useState } from "react";
import "./../styles/BoxListTask.css";

const BoxListTask = () => {
  const [cells, setCells] = useState(["A", "B", "C"]);

  const handleChangeCellContent = (value: string, indexToUpdate: number) => {
    setCells((prevCells) =>
      prevCells.map((cell, index) => {
        return index === indexToUpdate ? value : cell;
      })
    );
  };

  const handlePlusClicked = (index: number) => {
    setCells((prevCells) => [
      ...prevCells.slice(0, index + 1),
      "_",
      ...prevCells.slice(index + 1),
    ]);
  };

  useEffect(() => {
    console.log(cells);
  }, [cells]);

  return (
    <div style={{ marginTop: "120px" }}>
      <div className="cells">
        {cells.map((cell, index) => (
          <div className="cell" key={index}>
            <input
              onChange={(event) =>
                handleChangeCellContent(event.target.value, index)
              }
              value={cell}
            ></input>
            {index !== cells.length - 1 && (
              <span
                className="plus"
                onClick={() => handlePlusClicked(index)}
              ></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxListTask;
