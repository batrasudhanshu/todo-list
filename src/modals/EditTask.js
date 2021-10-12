import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
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

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          {/* <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/> */}
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleNameChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          {/* <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea> */}
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
                ],
              ],
            }}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
