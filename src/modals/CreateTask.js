import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SunEditor from "suneditor-react";

import "suneditor/dist/css/suneditor.min.css";
const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    setTaskName(value);
  };
  const handleDescriptionChange = (e) => {
    console.log("value", e);
    setDescription(e);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = { id: Math.random().toString(36).slice(4) };
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    console.log(taskObj);
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleNameChange}
            name="taskName"
          />
          {/* <SunEditor
          //   onChange={handleChange}
          //   className="form-control"
          //   setContents={taskName}
          //   setOptions={{
          //     buttonList: [
          //       ["bold", "italic", "strike", "list", "align", "fontSize"],
          //     ],
          //   }}
          // /> */}
        </div>
        <div className="form-group">
          <label>Description</label>
          {/* <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
          ></textarea> */}

          <SunEditor
            rows="5"
            onChange={handleDescriptionChange}
            className="form-control"
            setContents={description}
            name="description"
            setOptions={{
              buttonList: [
                [
                  "bold",

                  "italic",
                  "strike",
                  "list",
                  "align",
                  "fontSize",

                  "image",
                  "audio",
                  "link",
                ],
              ],
            }}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
