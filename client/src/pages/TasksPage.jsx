import { useState, useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard.jsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

dayjs.extend(utc);

function TasksPage() {
  const { getTasks, tasks } = useTasks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const { isAuthenticated,user } = useAuth();

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterDate === "" || dayjs(task.date).format('YYYY-MM-DD') === filterDate)
  );

  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterDate("");
  };

  return (
    <>
      <div>
        {isAuthenticated && (
          <div>
            <div>{`Welcome ${user.username}!`}</div>
            <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-sm">
              Add Task
            </Link>
          </div>
        )}
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-200 px-4 py-2 rounded-md w-64 focus:outline-none"
          />
          <input
            type="date"
            value={filterDate}
            onChange={handleDateChange}
            className="bg-gray-200 px-4 py-2 rounded-md focus:outline-none"
          />
          <button
            onClick={handleReset}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            Reset to Default
          </button>
        </div>

        {filteredTasks.length === 0 ? (
          <h1 className="text-3xl text-gray-800">No tasks found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map((task) => (
              <TaskCard task={task} key={task._id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TasksPage;
