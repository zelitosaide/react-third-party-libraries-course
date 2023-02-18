import { useFormik, Formik } from "formik";
import * as Yup from "yup";

export default function Index() {
  return (
    <>
      <Form />
      <Form2 />
    </>
  );
}

function Form() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <form></form>
    </Formik>
  );
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
    errors.email = "Invalid email format!";
  }
  if (!values.channel) {
    errors.channel = "This field is required!";
  }
  return errors;
}

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("This field is required!"),
  channel: Yup.string().required("This field is required!"),
});

function Form2() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          {...formik.getFieldProps("name")}
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
        />
        {formik.touched.name && !!formik.errors.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </p>
      <p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          {...formik.getFieldProps("email")}
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
        />
        {formik.touched.email && !!formik.errors.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
      </p>
      <p>
        <label htmlFor="channel">Channel: </label>
        <input
          type="text"
          name="channel"
          id="channel"
          {...formik.getFieldProps("channel")}
          // value={formik.values.channel}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
        />
        {formik.touched.channel && !!formik.errors.channel && (
          <p style={{ color: "red" }}>{formik.errors.channel}</p>
        )}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}
