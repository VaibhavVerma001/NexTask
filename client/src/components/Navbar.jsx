import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center w-full">
      <Link to={isAuthenticated ? '/tasks' : '/'}>
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            
            <>
              <Link to='/' onClick={() => { logout() }}>
                Logout
              </Link>
            </>
          </>
        ) : (
          <>
            <li>
              <Link to='/login' className="ml-4">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar