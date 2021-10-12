import React, { useEffect, useState } from "react";

const TaskDetails = (props) => {
  const [taskInfo, setTaskInfo] = useState({});

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);

      let result = obj.find(({ id }) => id === `${props.match.params.id}`);
      setTaskInfo(result);
      console.log("props", result);
    }
  }, []);
  return <div className="header text-center ">Check the console window</div>;
};

export default TaskDetails;
