import { useFormik } from "formik";
import Navbar from "../components/StuMarksNavBar";
import "../styles/studentmark.css";
import { Button, Select, Form, Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import StudentMarkService from "../adapters/StudentMarkService";
import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router-dom";
import SoloAlert from "soloalert";

const options1 = [
  { key: "b", text: "Biological Science", value: "Biological Science" },
  { key: "m", text: "Combined Maths", value: "Combined Maths" },
];
const options2 = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
];

class UpdateMarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: this.props.match.params.id,
      id: this.props.match.params.id,
      nicno: "",
      studName: "",
      stream: "",
      term: "",
      chemMarks: "",
      physicsMarks: "",
      bioMarks: "",
      mathsMarks: "",
      NicnoError: "",
      StudNameError: "",
      StreamError: "",
      TermError: "",
      ChemMarksError: "",
      PhysicsMarksError: "",
      BioMarksError: "",
      MathsMarksError: "",
    };

    this.changeNicnoHandler = this.changeNicnoHandler.bind(this);
    this.changeStudNameHandler = this.changeStudNameHandler.bind(this);
    this.changeStreamHandler = this.changeStreamHandler.bind(this);
    this.changeTermHandler = this.changeTermHandler.bind(this);
    this.changeChemMarksHandler = this.changeChemMarksHandler.bind(this);
    this.changePhysicsMarksHandler = this.changePhysicsMarksHandler.bind(this);
    this.changeBioMarksHandler = this.changeBioMarksHandler.bind(this);
    this.changeMathsMarksHandler = this.changeMathsMarksHandler.bind(this);
    this.updateMark = this.updateMark.bind(this);
    this.onSuccessUpdate = this.onSuccessUpdate.bind(this);
  }

  componentDidMount() {
    StudentMarkService.getStudentMarkById(this.state.id).then((res) => {
      console.log("teacmarksher");
      let mark = res.data.user;
      console.log(mark);
      this.setState({
        nicno: mark.nicno,
        studName: mark.studName,
        stream: mark.stream,
        term: mark.term,
        chemMarks: mark.chemMarks,
        physicsMarks: mark.physicsMarks,
        bioMarks: mark.bioMarks,
        mathsMarks: mark.mathsMarks,
      });
    });
    console.log(this.state.studName);
  }

  onSuccessUpdate() {
    confirmAlert({
      title: "Successfully Updated!",
      buttons: [
        {
          label: "OK",
          onClick: () => {
            this.props.history.push("/viewMarks");
          },
        },
      ],
    });
  }

  validateUpdateMarkForm() {
    let NicnoError = "";
    let StudNameError = "";
    let StreamError = "";
    let TermError = "";
    let ChemMarksError = "";
    let PhysicsMarksError = "";
    let BioMarksError = "";
    let MathsMarksError = "";

    if (
      this.state.studName === "" ||
      this.state.studName === null ||
      this.state.studName === undefined
    ) {
      StudNameError = "Student name canot be null can not contain numbers";
    }
    if (
      this.state.nicno === "" ||
      this.state.nicno === null ||
      this.state.nicno === undefined
    ) {
      NicnoError = "Student NIC canot be null and shoul be valid";
    }
    if (!this.state.stream) {
      StreamError = "Stream canot be null";
    }

    if (!this.state.term) {
      TermError = "Stream canot be null";
    }
    if (
      this.state.chemMarks === "" ||
      this.state.chemMarks === null ||
      this.state.chemMarks === undefined
    ) {
      ChemMarksError = "Marks canot be null";
    }
    if (
      this.state.physicsMarks === "" ||
      this.state.physicsMarks === null ||
      this.state.physicsMarks === undefined
    ) {
      PhysicsMarksError = "Marks canot be null ";
    }
    if (
      this.state.bioMarks === "" ||
      this.state.bioMarks === null ||
      this.state.bioMarks === undefined
    ) {
      BioMarksError = "Marks canot be null ";
    }
    if (
      this.state.mathsMarks === "" ||
      this.state.mathsMarks === null ||
      this.state.mathsMarks === undefined
    ) {
      MathsMarksError = "Marks canot be null ";
    }
    if (
      NicnoError ||
      StudNameError ||
      StreamError ||
      TermError ||
      ChemMarksError ||
      PhysicsMarksError ||
      BioMarksError ||
      MathsMarksError
    ) {
      this.setState({
        NicnoError,
        StudNameError,
        StreamError,
        TermError,
        ChemMarksError,
        PhysicsMarksError,
        BioMarksError,
        MathsMarksError,
      });
      return false;
    }
    return true;
  }

  UpdateMarks() {
    console.log("updatemarks");
    const isValid = this.validateUpdateMarkForm();
    if (isValid) {
      let mark = {
        nicno: this.state.nicno,
        studName: this.state.studName,
        stream: this.state.stream,
        term: this.state.term,
        chemMarks: this.state.chemMarks,
        physicsMarks: this.state.physicsMarks,
        bioMarks: this.state.bioMarks,
        mathsMarks: this.state.mathsMarks,
      };
      console.log("mark => " + JSON.stringify(markteacher));
      StudentMarkService.updateMarks(mark, this.state.id).then((res) => {
        this.onSuccessUpdate();
      });
    }
  }

  changeNicnoHandler = (event) => {
    this.setState({ nicno: event.target.value });
  };

  changeStudNameHandler = (event) => {
    this.setState({ studName: event.target.value });
  };

  changeStreamHandler = (event) => {
    this.setState({ stream: event.target.value });
  };

  changeTermHandler = (event) => {
    this.setState({ term: event.target.value });
  };

  changeChemMarksHandler = (event) => {
    this.setState({ chemMarks: event.target.value });
  };

  changePhysicsMarksHandler = (event) => {
    this.setState({ physicsMarks: event.target.value });
  };

  changeBioMarksHandler = (event) => {
    this.setState({ bioMarks: event.target.value });
  };

  changeMathsMarksHandler = (event) => {
    this.setState({ mathsMarks: event.target.value });
  };

  cancel() {
    this.props.history.push("/viewMarks");
  }

  render() {
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
                    <div style={{ color: "red" }}>
                      {formik.errors.chemMarks}
                    </div>
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
}
export default withRouter(UpdateMarks);
