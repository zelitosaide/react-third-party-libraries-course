import Tipografias from "./typography";
import Butoes from "./button";
import TextFields from "./text-field";
import SelectFields from "./select";
import RadioButtons from "./radio-buttons";

export default function Index() {
  return (
    <>
      <RadioButtons />
      <SelectFields />
      <TextFields />
      <Butoes />
      <Tipografias />
    </>
  );
}
