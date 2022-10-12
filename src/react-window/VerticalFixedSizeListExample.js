import { FixedSizeList as List } from "react-window";

function Row({ index, style }) {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  );
}

export function VerticalFixedSizeListExample() {
  return (
    <List
      className="List"
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}