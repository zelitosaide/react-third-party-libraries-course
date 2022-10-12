import { VariableSizeList as List } from "react-window";

const rowSizes = new Array(1000).fill(true).map(function () {
  return 25 + Math.round(Math.random() * 50);
});

const getItemSize = function (index) {
  return rowSizes[index];
}

function Row({ index, style }) {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  );
}

export function VerticalVariableSizeListExample() {
  return (
    <List
      className="List"
      height={150}
      itemCount={1000}
      itemSize={getItemSize}
      width={300}
    >
      {Row}
    </List>
  );
}

