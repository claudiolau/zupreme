import { FC } from "react";
import { FixedSizeGrid as Grid } from "react-window";

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? "GridItemOdd"
          : "GridItemEven"
        : rowIndex % 2
        ? "GridItemOdd"
        : "GridItemEven"
    }
    style={style}
  >
    r{rowIndex}, c{columnIndex}
  </div>
);
export const HomeGrid: FC = () => {
  return (
    <div className="flex flex-col justify-center p-4">
      <div className="items-center p-8 justify-between w-full max-w-4xl mx-auto text-grey-800">
        <Grid
          className="Grid"
          columnCount={1000}
          columnWidth={100}
          height={150}
          rowCount={1000}
          rowHeight={35}
          width={300}
        >
          {Cell}
        </Grid>
      </div>
    </div>
  );
};
