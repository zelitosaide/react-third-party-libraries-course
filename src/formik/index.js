import { useFormik } from "formik";

export default function Index() {
  return <Form />;
}

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

function onSubmit(values) {
  console.log(values);
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "This field is required!";
  }
  if (!values.email) {
    errors.email = "This field is required!";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    return "Invalid email format!";
  }
  if (!values.channel) {
    errors.channel = "This field is required!";
  }
}

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </p>
      <p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </p>
      <p>
        <label htmlFor="channel">Channel: </label>
        <input
          type="text"
          name="channel"
          id="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}
