import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/TimetableNav";
import "../styles/timetable.css";
import { Button, Select, Form, Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import timetableService from "../adapters/timetableService";
import { useNavigate } from "react-router-dom";
import SoloAlert from "soloalert";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const options = [
  { key: "s", text: "Sinhala", value: "Sinhala" },
  { key: "e", text: "English", value: "English" },
  { key: "b", text: "Biology", value: "Biology" },
  { key: "m", text: "Mathematics", value: "Mathematics" },
  { key: "h", text: "History", value: "History" },
  { key: "p", text: "Physics", value: "Physics" },
];

const options1 = [
  { text: "6", value: "6" },
  { text: "7", value: "7" },
  { text: "8", value: "8" },
  { text: "9", value: "9" },
  { text: "10", value: "10" },
  { text: "11", value: "11" },
  { text: "12", value: "12" },
  { text: "13", value: "13" },
];

const options2 = [
  { key: "s", text: "Sunday", value: "Sunday" },
  { key: "m", text: "Monday", value: "Monday" },
  { key: "t", text: "Tuesday", value: "Tuesday" },
  { key: "w", text: "Wendsday", value: "Wendsday" },
  { key: "th", text: "Thursday", value: "Thursday" },
  { key: "f", text: "Friday", value: "Friday" },
  { key: "s", text: "Saturday", value: "Saturday" },
];
function AddStudent() {
  // let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      teacherName: "",
      subject: "",
      grade: "",
      day: "",
      startTime: "",
      endTime: "",
    },

    validationSchema: Yup.object({
      teacherName: Yup.string()
        .min(3, "Too Small")
        .max(30, "Input 30 characters or below")
        .matches(/^[A-Za-z ]*$/, "Please Enter Valid name")
        .required("*Required"),

      subject: Yup.string().required("*Required"),
      grade: Yup.string().required("*Required"),
      day: Yup.string().required("*Required"),
      startTime: Yup.string().required("*Required"),
      endTime: Yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      timetableService.insertTimetable(values).then(() => {
        // SoloAlert.alert({
        //   title: "Success!!!",
        //   body: "Data added successfully",
        //   icon: "success",
        //   theme: "light",
        //   useTransparency: true,
        //   onOk: function () {
        //     window.location = "/viewTimetable";
        //   },
        // });
        confirmAlert({
          title: "Successfully Added!",
          buttons: [
            {
              label: "OK",
              onClick: () => {
                window.location = "/viewTimetable";
              },
            },
          ],
        });
      });
    },
  });

  return (
    <>
      <Navbar />
      <div>
        <Form id="student-form" onSubmit={formik.handleSubmit}>
          <label id="student-form-label">Add Timetable</label>
          <Form.Field>
            <label>Teacher Name</label>
            <input
              placeholder="teacherName"
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
            <label>Subject</label>
            <Dropdown
              selection
              options={options}
              placeholder="Subject"
              id="subject"
              name="subject"
              onChange={(_, { value }) =>
                formik.setFieldValue("subject", value)
              }
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div style={{ color: "red" }}>{formik.errors.subject}</div>
            ) : null}
          </Form.Field>

          <Form.Field>
            <label>Grade</label>
            <Dropdown
              selection
              options={options1}
              placeholder="Grade"
              id="grade"
              name="grade"
              onChange={(_, { value }) => formik.setFieldValue("grade", value)}
              value={formik.values.grade}
            />
            {formik.touched.grade && formik.errors.grade ? (
              <div style={{ color: "red" }}>{formik.errors.grade}</div>
            ) : null}
          </Form.Field>

          <Form.Field>
            <label>Day</label>
            <Dropdown
              selection
              options={options2}
              placeholder="Day"
              id="day"
              name="day"
              onChange={(_, { value }) => formik.setFieldValue("day", value)}
              value={formik.values.day}
            />
            {formik.touched.day && formik.errors.day ? (
              <div style={{ color: "red" }}>{formik.errors.day}</div>
            ) : null}
          </Form.Field>

          <Form.Field>
            <label>Start Time</label>
            <input
              placeholder="Start Time"
              id="startTime"
              name="startTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startTime}
            />
            {formik.touched.startTime && formik.errors.startTime ? (
              <div style={{ color: "red" }}>{formik.errors.startTime}</div>
            ) : null}
          </Form.Field>

          <Form.Field>
            <label>End Time</label>
            <input
              placeholder="End Time"
              id="endTime"
              name="endTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endTime}
            />
            {formik.touched.endTime && formik.errors.endTime ? (
              <div style={{ color: "red" }}>{formik.errors.endTime}</div>
            ) : null}
          </Form.Field>
          {/* <Form.Field>
            <label>Grade</label>
            <input placeholder='Grade'
            type="text"
           />
          </Form.Field> */}

          <Button primary type="submit" size="small">
            Submit
          </Button>
          <Button secondary type="reset" size="small">
            Reset
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddStudent;
