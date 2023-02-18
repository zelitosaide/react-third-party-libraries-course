import { useFormik } from "formik";

export default function Index() {
  return <Form />;
}

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label htmlFor="channel">Channel: </label>
      <input
        type="text"
        name="channel"
        id="channel"
        value={formik.values.channel}
        onChange={formik.handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
