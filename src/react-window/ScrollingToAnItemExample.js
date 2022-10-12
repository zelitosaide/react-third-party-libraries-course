import { useRef } from "react";
import { FixedSizeList as List } from "react-window";

function Row({ index, style }) {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  );
}

export function ScrollingToAnItemExample() {
  const listRef = useRef();

  function scrollToRow200Auto() {
    listRef.current.scrollToItem(200);
  }

  function scrollToRow250Smart() {
    listRef.current.scrollToItem(250, 'smart');
  }

  function scrollToRow300Center() {
    listRef.current.scrollToItem(300, 'center');
  }

  return (
    <>
      <button className="ExampleButton" onClick={scrollToRow200Auto}>
        Scroll to row 200 (align: auto)
      </button>
      <button className="ExampleButton" onClick={scrollToRow250Smart}>
        Scroll to row 250 (align: smart)
      </button>
      <button className="ExampleButton" onClick={scrollToRow300Center}>
        Scroll to row 300 (align: center)
      </button>

      <List
        className="List"
        height={150}
        itemCount={1000}
        itemSize={35}
        ref={listRef}
        width={300}
      >
        {Row}
      </List>
    </>
  );
}