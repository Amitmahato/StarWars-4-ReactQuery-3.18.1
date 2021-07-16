import React from "react";

const Paginate: React.FC<{
  currentPageCount: number;
  totalDataCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ currentPageCount, totalDataCount, setPage }) => {
  const disablePrevious = currentPageCount === 1;
  const disableNext = Number(totalDataCount) - currentPageCount * 10 <= 0;
  console.log(Number(totalDataCount) - currentPageCount * 10 <= 0);
  return (
    <div>
      <button
        onClick={() => {
          setPage(1);
        }}
        disabled={disablePrevious}
        style={{
          border: "none",
          color: disablePrevious ? "#444" : "",
          fontSize: 24,
        }}
        title={disablePrevious ? "" : "Goto First Page"}
      >
        «
      </button>
      <button
        onClick={() => {
          setPage(currentPageCount - 1);
        }}
        disabled={disablePrevious}
        style={{
          border: "none",
          color: disablePrevious ? "#444" : "",
          fontSize: 24,
        }}
        title={disablePrevious ? "" : "Previous"}
      >
        ‹
      </button>
      <span style={{ margin: "0 20px", fontWeight: 600 }}>
        {currentPageCount}
      </span>
      <button
        onClick={() => {
          setPage(currentPageCount + 1);
        }}
        disabled={disableNext}
        style={{
          border: "none",
          color: disableNext ? "#444" : "",
          fontSize: 24,
        }}
        title={disableNext ? "" : "Next"}
      >
        ›
      </button>
      <button
        onClick={() => {
          setPage(
            totalDataCount % 10 === 0
              ? totalDataCount / 10
              : Math.floor(totalDataCount / 10) + 1
          );
        }}
        disabled={disableNext}
        style={{
          border: "none",
          color: disableNext ? "#444" : "",
          fontSize: 24,
        }}
        title={disableNext ? "" : "Next"}
      >
        »
      </button>
    </div>
  );
};

export default Paginate;
