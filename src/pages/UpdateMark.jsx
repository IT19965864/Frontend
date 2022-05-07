import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/StuMarksNavBar";
import "../styles/studentmark.css";
import { Button, Select, Form, Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import StudentMarkService from "../adapters/StudentMarkService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const options1 = [
  { key: "b", text: "Biological Science", value: "Biological Science" },
  { key: "m", text: "Combined Maths", value: "Combined Maths" },
];
const options2 = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
];

const cancel = () => {
  window.location("/ViewMarks");
};
function UpdateMark() {
  // const history = useHistory();
  // const { id } = useParams();
  // const [nicno, setNicno] = useState("");
  // const [studName, setStudName] = useState("");
  // const [stream, setStream] = useState("");
  // const [term, setTerm] = useState("");
  // const [chemMarks, setChemMarks] = useState("");
  // const [physicsMarks, setPhysicsMarks] = useState("");
  // const [bioMarks, setBioMarks] = useState("");
  // const [mathsMarks, setMathsMarks] = useState("");

  // useEffect(() => {
  //   studentService.getStudentById(id).then((res) => {
  //     setNicno(res.data.nicno);
  //     setStudName(res.data.studName);
  //     setStream(res.data.stream);
  //     setTerm(res.data.term);
  //     setChemMarks(res.data.chemMarks);
  //     setPhysicsMarks(res.data.physicsMarks);
  //     setBioMarks(res.data.bioMarks);
  //     setMathsMarks(res.data.mathsMarks);
  //   });
  // });
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      nicno: "",
      studName: "",
      stream: "",
      term: "",
      chemMarks: "",
      physicsMarks: "",
      bioMarks: "",
      mathsMarks: "",

      // nicno: nicno,
      // studName: studName,
      // stream: stream,
      // term: term,
      // chemMarks: chemMarks,
      // physicsMarks: physicsMarks,
      // bioMarks: bioMarks,
      // mathsMarks: mathsMarks,
    },

    validationSchema: Yup.object({
      nicno: Yup.string()
        .min(9, "NIC must be 9 characters")
        .max(12, "Input 12 characters or below")
        .required("Required"),

      studName: Yup.string()
        .min(3, "Too Small")
        .max(30, "Input 30 characters or below")
        .matches(/^[A-Za-z ]*$/, "Please Enter Valid name")
        .required("Required"),

      stream: Yup.string().required("Required"),

      term: Yup.string().required("Required"),

      chemMarks: Yup.string()
        .min(0)
        .max(100, "Input valid Mark")
        .required("Required"),

      physicsMarks: Yup.string()
        .min(0)
        .max(100, "Input valid Mark")
        .required("Required"),

      bioMarks: Yup.string().min(0).max(100, "Input valid Mark"),
      //.required("*Required"),

      mathsMarks: Yup.string().min(0).max(100, "Input valid Mark"),
      //.required("*Required"),
    }),

    onSubmit: (values) => {
      StudentMarkService.UpdateMark(values, id).then((res) => {
        history.push("/ViewMarks");
      });
    },
  });

  return (
    <>
      <Navbar />
      <div>
        <Form
          id="student-mark-form"
          onSubmit={formik.handleSubmit}
          class="ui form"
        >
          <label id="student-mark-form-label">Add Student Mark</label>
          <h4 class="ui dividing header">Student Information</h4>
          <Form.Field>
            <label>NIC</label>
            <input
              placeholder="NIC"
              id="nicno"
              name="nicno"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nicno}
            />
            {formik.touched.nicno && formik.errors.nicno ? (
              <div style={{ color: "red" }}>{formik.errors.nicno}</div>
            ) : null}
          </Form.Field>
          <Form.Field>
            <div class="required field">
              <label>Student Name</label>
              <input
                placeholder="Student Name"
                id="studName"
                name="studName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studName}
              />
              {formik.touched.studName && formik.errors.studName ? (
                <div style={{ color: "red" }}>{formik.errors.studName}</div>
              ) : null}
            </div>
          </Form.Field>

          <div class="two fields">
            <Form.Field>
              <div class="required field">
                <label>Stream</label>
                <Dropdown
                  selection
                  options={options1}
                  placeholder="Stream"
                  id="stream"
                  name="stream"
                  onChange={(_, { value }) => {
                    formik.setFieldValue("stream", value);
                    if (value === "Biological Science") {
                      setDisabled(false);
                      setDisabled1(true);
                    } else {
                      setDisabled(true);
                      setDisabled1(false);
                    }
                  }}
                  value={formik.values.stream}
                />
                {formik.touched.stream && formik.errors.stream ? (
                  <div style={{ color: "red" }}>{formik.errors.stream}</div>
                ) : null}
              </div>
            </Form.Field>

            <Form.Field>
              <div class="required field">
                <label>Term</label>
                <Dropdown
                  selection
                  options={options2}
                  placeholder="Term"
                  id="term"
                  name="term"
                  onChange={(_, { value }) =>
                    formik.setFieldValue("term", value)
                  }
                  value={formik.values.term}
                />
                {formik.touched.term && formik.errors.term ? (
                  <div style={{ color: "red" }}>{formik.errors.term}</div>
                ) : null}
              </div>
            </Form.Field>
          </div>

          <h4 class="ui dividing header">Marks Information</h4>

          <div class="two fields">
            <Form.Field>
              <label>Biology </label>
              <input
                placeholder="Biology Mark"
                id="bioMarks"
                name="bioMarks"
                type="text"
                pattern="[0-9]*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bioMarks}
                disabled={disabled}
              />
              {formik.touched.chemMarks && formik.errors.bioMarks ? (
                <div style={{ color: "red" }}>{formik.errors.bioMarks}</div>
              ) : null}
            </Form.Field>

            <Form.Field>
              <label>Maths </label>
              <input
                placeholder="Maths Mark"
                id="mathsMarks"
                name="mathsMarks"
                type="text"
                pattern="[0-9]*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mathsMarks}
                disabled={disabled1}
              />

              {formik.touched.chemMarks && formik.errors.mathsMarks ? (
                <div style={{ color: "red" }}>{formik.errors.mathsMarks}</div>
              ) : null}
            </Form.Field>
          </div>
          <div class="two fields">
            <Form.Field>
              <div class="required field">
                <label>Chemistry </label>
                <input
                  placeholder="Chemistry Mark"
                  id="chemMarks"
                  name="chemMarks"
                  type="text"
                  pattern="[0-9]*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.chemMarks}
                />
                {formik.touched.chemMarks && formik.errors.chemMarks ? (
                  <div style={{ color: "red" }}>{formik.errors.chemMarks}</div>
                ) : null}
              </div>
            </Form.Field>

            <Form.Field>
              <div class="required field">
                <label>Physics </label>
                <input
                  placeholder="Physics Mark"
                  id="physicsMarks"
                  name="physicsMarks"
                  type="text"
                  pattern="[0-9]*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.physicsMarks}
                />
                {formik.touched.chemMarks && formik.errors.physicsMarks ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.physicsMarks}
                  </div>
                ) : null}
              </div>
            </Form.Field>
          </div>

          <Button primary type="submit" size="small">
            Update
          </Button>
          <Button
            secondary
            size="small"
            onClick={() => history.push("/ViewMarks")}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}
export default UpdateMark;
