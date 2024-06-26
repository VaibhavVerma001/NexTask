import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importar el authProvider
import { AuthProvider } from "./context/authContext.jsx";
import { TaskProvider } from "./context/TasksContext.jsx";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import ProtectedRoute from './ProtectedRoute.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import TaskDetailPage from './pages/TaskDetailPage.jsx';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />} />
                <Route path="/tasks/:id" element={<TaskDetailPage />} />
                <Route path='/add-task' element={<TaskFormPage />} />
                <Route path='/tasks/edit/:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>

        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App