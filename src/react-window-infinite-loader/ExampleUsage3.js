import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};

export function ExampleUsage3() {
  function isItemLoaded(index) {
    return !!itemStatusMap[index];
  }

  function loadMoreItems(startIndex, stopIndex) {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADING;
    }

    return new Promise((resolve) =>
      setTimeout(() => {
        for (let index = startIndex; index <= stopIndex; index++) {
          itemStatusMap[index] = LOADED;
        }
        resolve();
      }, 2500)
    );
  }

  function Row({ index, style }) {
    let label;
    if (itemStatusMap[index] === LOADED) {
      label = `Row ${index}`;
    } else {
      label = "Loading...";
    }
    return (
      <div
        className="ListItem"
        style={style}
      >
        {label}
      </div>
    );
  }

  return (
    <div>
      <h1>ExampleUsage3</h1>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={1000}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={150}
            itemCount={1000}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={300}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
}
