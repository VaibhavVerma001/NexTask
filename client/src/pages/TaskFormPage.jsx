import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue('title', task.title);
        setValue('description', task.description);
        setValue('date', dayjs(task.date).utc().format('YYYY-MM-DD'));
      }
    }
    loadTask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate('/tasks');
  });

  const handleClose = () => {
    navigate('/tasks');
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
            <input
              type="text"
              placeholder="Title"
              {...register('title', { required: true })}
              autoFocus
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.title && <span className="text-red-500 block ">Title is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-white">Description</label>
            <textarea
              rows="3"
              placeholder="Description"
              {...register('description', { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            ></textarea>
            {errors.description && <span className="text-red-500 block ">Description is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-white">Date</label>
            <input
              type="date"
              {...register('date', { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.date && <span className="text-red-500 block ">Date is required</span>}
          </div>

          <div className="flex justify-between">
            <button type="submit" className="bg-indigo-500 px-3 py-2 rounded-md">
              Save
            </button>
            <button type="button" onClick={handleClose} className="bg-red-500 px-3 py-2 rounded-md">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
