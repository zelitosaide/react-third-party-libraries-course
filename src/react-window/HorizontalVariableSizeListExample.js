import { VariableSizeList as List } from "react-window";

const columnSizes = new Array(1000).fill(true).map(function () {
  return 75 + Math.round(Math.random() * 50);
});

const getItemSize = function (index) {
  return columnSizes[index];
}

function Column({ index, style }) {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Column {index}
    </div>
  );
}

export function HorizontalVariableSizeListExample() {
  return (
    <List
      className="List"
      height={75}
      itemCount={1000}
      itemSize={getItemSize}
      layout="horizontal"
      width={300}
    >
      {Column}
    </List>
  );
}