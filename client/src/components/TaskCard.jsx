import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-gray-800 max-w-md w-full p-4 md:p-6 rounded-lg shadow-md">
      <header className="flex justify-between">
        <h1 className="text-lg md:text-xl font-bold text-white">{task.title}</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => { deleteTask(task._id) }}
            className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
          >
            Delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base"
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-gray-300 text-sm md:text-base">{task.description}</p>
      <p className="text-gray-400 text-xs md:text-sm">
        {dayjs(task.date).utc().format('DD/MM/YYYY')}
      </p>
    </div>
  );
}

export default TaskCard;
