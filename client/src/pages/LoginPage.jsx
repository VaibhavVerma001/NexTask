import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, errors: signInErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    signIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-800 max-w-md w-full p-10 rounded-md">
        {signInErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white my-2 rounded-md">
            {error}
          </div>
        ))}

        <h1 className="text-3xl font-bold my-2 text-white">Login</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:bg-gray-600"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500">Email is required</p>
          )}

          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:bg-gray-600"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md my-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="flex justify-between mt-4">
          <span className="text-white">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500">
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
