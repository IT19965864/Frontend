import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/TeacherNavBar";
import "../styles/teacher.css";
import { Button, Select, Form, Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import teacherService from "../adapters/TeacherService";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import SoloAlert from "soloalert";

import axios, { Axios } from "axios";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];
const gradeOptions = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
  { key: 4, text: "4", value: 4 },
  { key: 5, text: "5", value: 5 },
  { key: 6, text: "6", value: 6 },
  { key: 7, text: "7", value: 7 },
  { key: 8, text: "8", value: 8 },
  { key: 9, text: "9", value: 9 },
  { key: 10, text: "10", value: 10 },
  { key: 11, text: "11", value: 11 },
];

function AddTeacher() {
  const formik = useFormik({
    initialValues: {
      teacherName: "",
      teacherNic: "",
      teacherGender: "",
      teacherBirthDate: "",
      teacherEmail: "",
      teacherMobile: "",
      teacherSubject: "",
      teacherGrade: "",
    },

    validationSchema: Yup.object({
      teacherName: Yup.string()
        .min(3, "Too Small")
        .max(30, "Input 30 characters or below")
        .matches(/^[A-Za-z ]*$/, "Please Enter Valid name")
        .required("*Required"),
      teacherNic: Yup.string().min(9).max(12).required("*Required"),

      teacherGender: Yup.string(),

      teacherMobile: Yup.string()
        .matches(
          /^((\\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          // /^\d{10}$/,
          "Phone number is not valid"
        )
        .min(10)
        .max(10)
        .required("*Required"),

      teacherEmail: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
          "Please Enter Valid email address"
        )
        .required("*Required"),

      teacherSubject: Yup.string()
        .min(3, "Input must be at least 3 characters")
        .max(15, "Input 15 characters or below")
        .required("*Required"),

      teacherGrade: Yup.string(),
    }),
    onSubmit: (values, e) => {
      teacherService.insertTeachers(values).then(() => {
        confirmAlert({
          title: "Successfully Added!",
          buttons: [
            {
              label: "OK",
              onClick: () => {
                window.location = "/";
              },
            },
          ],
        });
        // SoloAlert.alert({
        //   title: "Welcome!",
        //   body: "Data added successfully",
        //   icon: "success",
        //   theme: "light",
        //   useTransparency: true,
        //   onOk: function () {
        //     window.location = "/";
        //   },
        // });
        e.resetForm();
        console.log(values);
      });
      //  axios.post("http://localhost:8070/student/add",values);
      // e.resetForm();
      // console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <div>
        <div className="form-teacher">
          <Form id="teacher-form" onSubmit={formik.handleSubmit}>
            <label id="teacher-form-label">Add Teacher</label>
            <Form.Field>
              <label>Teacher Name</label>
              <input
                placeholder="Teacher Name"
                id="teacherName"
                name="teacherName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherName}
              />
              {formik.touched.teacherName && formik.errors.teacherName ? (
                <div style={{ color: "red" }}>{formik.errors.teacherName}</div>
              ) : null}
            </Form.Field>

            <Form.Field>
              <label>NIC</label>
              <input
                placeholder="NIC"
                id="teacherNic"
                name="teacherNic"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherNic}
              />
              {formik.touched.teacherNic && formik.errors.teacherNic ? (
                <div style={{ color: "red" }}>{formik.errors.teacherNic}</div>
              ) : null}
            </Form.Field>
            <Form.Field>
              <label>Gender</label>
              <Dropdown
                selection
                options={genderOptions}
                placeholder="Gender"
                id="teacherGender"
                name="teacherGender"
                onChange={(_, { value }) =>
                  formik.setFieldValue("teacherGender", value)
                }
                value={formik.values.teacherGender}
              />
              {formik.touched.teacherGender && formik.errors.teacherGender ? (
                <div style={{ color: "red" }}>
                  {formik.errors.teacherGender}
                </div>
              ) : null}
            </Form.Field>

            <Form.Field>
              <label>Birthday</label>
              <input
                id="teacherBirthDate"
                name="teacherBirthDate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherBirthDate}
              />
              {formik.touched.teacherBirthDate &&
              formik.errors.teacherBirthDate ? (
                <div style={{ color: "red" }}>
                  {formik.errors.teacherBirthDate}
                </div>
              ) : null}
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                id="teacherEmail"
                name="teacherEmail"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherEmail}
              />
              {formik.touched.teacherEmail && formik.errors.teacherEmail ? (
                <div style={{ color: "red" }}>{formik.errors.teacherEmail}</div>
              ) : null}
            </Form.Field>
            <Form.Field>
              <label>Mobile</label>
              <input
                placeholder="Mobile"
                id="teacherMobile"
                name="teacherMobile"
                type="text"
                onkeypress="return event.charCode >= 48"
                min="1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherMobile}
              />
              {formik.touched.teacherMobile && formik.errors.teacherMobile ? (
                <div style={{ color: "red" }}>
                  {formik.errors.teacherMobile}
                </div>
              ) : null}
            </Form.Field>
            <Form.Field>
              <label>Subject</label>
              <input
                placeholder="Subject"
                id="teacherSubject"
                name="teacherSubject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherSubject}
              />
              {formik.touched.teacherSubject && formik.errors.teacherSubject ? (
                <div style={{ color: "red" }}>
                  {formik.errors.teacherSubject}
                </div>
              ) : null}
            </Form.Field>

            <Form.Field>
              <label>Grade</label>
              <Dropdown
                selection
                options={gradeOptions}
                placeholder="Grade"
                id="teacherGrade"
                name="teacherGrade"
                onChange={(_, { value }) =>
                  formik.setFieldValue("teacherGrade", value)
                }
                value={formik.values.teacherGrade}
              />
              {formik.touched.teacherGrade && formik.errors.teacherGrade ? (
                <div style={{ color: "red" }}>{formik.errors.teacherGrade}</div>
              ) : null}
            </Form.Field>
            <div className="form-button">
              <Button primary type="submit" size="small">
                Submit
              </Button>
              <Button secondary type="reset" size="small">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddTeacher;
