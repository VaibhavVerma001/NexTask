import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white my-2 rounded-md">
            {error}
          </div>
        ))}

        <h1 className="text-3xl font-bold my-2 text-white">Register</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register('username', { required: true })}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:bg-gray-600"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email', { required: true })}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:bg-gray-600"
          />
          {errors.email && (
            <p className="text-red-500">Email is required</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register('password', { required: true })}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:bg-gray-600"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md my-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
        </form>

        <p className="flex justify-between mt-4">
          <span className="text-white">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
