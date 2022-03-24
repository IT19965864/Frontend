import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/TeacherNavBar";
import "../styles/student.css";
import { Button, Checkbox, Form } from "semantic-ui-react";

import * as Yup from "yup";

function AddStudent() {
  const formik = useFormik({
    initialValues: {
      stuName: "",
      nic: "",
      email: "",
      mobile: "",
      grade: "",
    },

    validationSchema: Yup.object({
      stuName: Yup.string()
        .min(3, "?")
        .max(30, "Input 30 characters or below")
        .matches(/^[A-Za-z ]*$/, "Please Enter Valid name")
        .required("Required"),
    }),
  });

  return (
    <>
      <Navbar />
      <div>
        <Form id="student-form" onSubmit={formik.handleSubmit}>
          <label id="student-form-label">Add Student</label>
          <Form.Field>
            <label>Student Name</label>
            <input
              placeholder="Student Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stuName}
            />
            {formik.touched.stuName && formik.errors.stuName ? (
              <div style={{ color: "red" }}>{formik.errors.stuName}</div>
            ) : null}

            <br />
          </Form.Field>

          <Form.Field>
            <label>NIC</label>
            <input placeholder="NIC" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Mobile</label>
            <input placeholder="Mobile" type="number" />
          </Form.Field>
          <Form.Field>
            <label>Grade</label>
            <input placeholder="Grade" type="text" />
          </Form.Field>

          <Button primary type="submit" size="small">
            Submit
          </Button>
          <Button secondary type="clear" size="small">
            Reset
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddStudent;
