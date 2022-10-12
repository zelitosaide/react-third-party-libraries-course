import { FixedSizeList as List } from "react-window";

function Column({ index, style }) {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Column {index}
    </div>
  );
}

export function HorizontalFixedSizeListExample() {
  return (
    <List
      className="List"
      height={75}
      itemCount={1000}
      itemSize={100}
      layout="horizontal"
      width={300}
    >
      {Column}
    </List>
  );
}