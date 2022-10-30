import { useState } from "react";
import { ExampleWrapper } from "./ExampleWrapper";

let page = 1;

export function ExampleUsage2() {
  const [state, setState] = useState({
    hasNextPage: true,
    isNextPageLoading: false,
    items: []
  });

  async function loadNextPage() {
    return fetch(`http://localhost:5000/invoices?limit=${9}&page=${page++}`)
      .then(function (response) {
        setState(function (prevState) {
          return {
            ...prevState,
            isNextPageLoading: true
          };
        });
        return response.json();
      }).then(function ({ items, pageInfo: { totalResults } }) {
        setState(function (prevState) {
          return {
            ...prevState,
            hasNextPage: prevState.items.length < totalResults,
            isNextPageLoading: false,
            items: [...prevState.items].concat(items)
          };
        });
      });
  };

  return (
    <ExampleWrapper
      hasNextPage={state.hasNextPage}
      isNextPageLoading={state.isNextPageLoading}
      items={state.items}
      loadNextPage={loadNextPage}
    />
  );
}