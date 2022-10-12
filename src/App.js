import { ExampleUsage } from "./react-window-infinite-loader/ExampleUsage";
import { HorizontalFixedSizeListExample } from "./react-window/HorizontalFixedSizeListExample";
import { HorizontalVariableSizeListExample } from "./react-window/HorizontalVariableSizeListExample";
import { ScrollingIndicatorsExample } from "./react-window/ScrollingIndicatorsExample";
import { ScrollingToAnItemExample } from "./react-window/ScrollingToAnItemExample";
import { VerticalFixedSizeListExample } from "./react-window/VerticalFixedSizeListExample";
import { VerticalVariableSizeListExample } from "./react-window/VerticalVariableSizeListExample";

export function App() {
  return (
    <div>
      <h1>React Window</h1>
      <h2>Vertical Fixed Size List Example</h2>
      <VerticalFixedSizeListExample />
      <h2>Horizontal Fixed SizeList Example</h2>
      <HorizontalFixedSizeListExample />
      <h2>Vertical Variable Size List Example</h2>
      <VerticalVariableSizeListExample />
      <h2>Horizontal Variable Size List Example</h2>
      <HorizontalVariableSizeListExample />
      <h2>Scrolling Indicators Example</h2>
      <ScrollingIndicatorsExample />
      <h2>Scrolling To An Item Example</h2>
      <ScrollingToAnItemExample />

      <h1>React Window Infinite Loader</h1>
      <h2>Example Usage</h2>
      <ExampleUsage />
    </div>
  );
}