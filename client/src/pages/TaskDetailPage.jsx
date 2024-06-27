import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskDetailPage() {
  const { getTask, deleteTask } = useTasks();
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const fetchedTask = await getTask(id);
      setTask(fetchedTask);
    };
    fetchTask();
  }, [id, getTask]);

  const handleDelete = async () => {
    await deleteTask(id);
    
    window.location.href = "/tasks";
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 max-w-md w-full p-4 md:p-6 rounded-lg shadow-md">
        <header className="flex justify-between mb-4">
          <h1 className="text-lg md:text-xl font-bold text-white">{`Title: ${task.title}`}</h1>
        </header>
        <p className="text-gray-300 text-sm md:text-base mb-4">{`Description: ${task.description}`}</p>
        <p className="text-gray-400 text-xs md:text-sm mb-4">
          {`Due Date: ${dayjs(task.date).utc().format('DD/MM/YYYY')}`}
        </p>
        <div className="flex justify-between mt-auto">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
          >
            Delete
          </button>
          <Link
            to={`/tasks/edit/${task._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
          >
            Edit
          </Link>
          <Link
            to="/tasks"
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailPage;
