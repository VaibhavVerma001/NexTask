import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    toast.success("Task deleted successfully");
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "  ...";
  };

  return (
    <div className="bg-gray-900 max-w-md w-full p-4 md:p-6 rounded-lg shadow-md flex flex-col overflow-hidden">
      <header className="flex justify-between mb-4">
        <h1 className="text-lg md:text-xl font-bold text-white">{task.title}</h1>
      </header>
      <p className="text-gray-300 text-sm md:text-base mb-4">{truncateText(task.description, 50)}</p>
      <p className="text-gray-400 text-xs md:text-sm mb-4">
        {dayjs(task.date).utc().format('DD/MM/YYYY')}
      </p>
      <div className="flex justify-between mt-auto">
        <button
          onClick={() => handleDelete(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
        >
          Delete
        </button>
        <Link
          to={`/tasks/${task._id}`}
          className="bg-gray-800 hover:bg-gray-700 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base mr-2"
        >
          Detailed View
        </Link>
        <Link
          to={`/tasks/edit/${task._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
        >
          Edit
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TaskCard;
