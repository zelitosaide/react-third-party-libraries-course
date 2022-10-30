import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

const LOADING = 1;
const LOADED = 2;
let page = 1;
let itemStatusMap = {};

// function isItemLoaded(index) {
//   return !!itemStatusMap[index];
// }

function Row({ index, style, data }) {
  let label;
  console.log(data);
  if (itemStatusMap[index] === LOADED) {
    label = `Row ${data[index]?.name}`;
  } else {
    label = "Loading...";
  }
  return (
    <div className="ListItem" style={style}>
      {label}
    </div>
  );
}

export function ExampleUsage() {
  const [data, setData] = useState([]);

  if (data.length === 0) {
    setData(Array.from({ length: 100 }).map(_ => null));
  }

  const isItemLoaded = index => index < data.length && data[index] !== null;

  async function loadMoreItems(startIndex, stopIndex) {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADING;
    }

    let limit = stopIndex - startIndex;

    // if (page > 1) {
    //   limit = stopIndex - startIndex - 4;
    // } else {
    //   limit = stopIndex - startIndex - 13;
    // }

    return fetch(`http://localhost:5000/invoices?limit=${limit}&page=${page++}`)
      .then(function (response) {
        return response.json();
      }).then(function ({ items }) {
        const newData = [...data];
        for (let idx = startIndex; idx < stopIndex; idx++) {
          newData[idx] = items[idx];
        }
        setData(newData);
      });
  }

  return (
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
          itemSize={75}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={300}
          layout="horizontal"
          itemData={data}
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>
  );
}