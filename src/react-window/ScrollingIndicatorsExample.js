import { FixedSizeList as List } from "react-window";

function Row({ index, isScrolling, style }) {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      {isScrolling ? 'Scrolling' : `Row ${index}`}
    </div>
  );
}

export function ScrollingIndicatorsExample() {
  return (
    <List
      className="List"
      height={150}
      itemCount={1000}
      itemSize={35}
      useIsScrolling
      width={300}
    >
      {Row}
    </List>
  );
}