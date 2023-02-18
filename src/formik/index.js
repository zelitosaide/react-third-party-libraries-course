import { useFormik } from "formik";

export default function Index() {
  return <Form />;
}

function Form() {
  const formik = useFormik({});

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="channel">Channel: </label>
      <input
        type="text"
        name="channel"
        id="channel"
      />
      <button>Submit</button>
    </form>
  );
}
