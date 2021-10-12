import React from "react";

const TaskDetails = () => {
  const [taskInfo, setTaskInfo] = useState({});

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskInfo(obj);
      console.log();
    }
  }, []);
  return <div>hey</div>;
};

export default TaskDetails;
