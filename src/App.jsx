import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobPage from './pages/job'
import PostJob from './pages/post-job'
import SavedJob from './pages/saved-job'
import MyJobs from './pages/my-jobs'
import { ThemeProvider } from './components/ui/theme-provider'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/job',
        element: <JobPage />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/post-job',
        element: <PostJob />
      },
      {
        path: '/saved-job',
        element: <SavedJob />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider> 
  );
}

export default App
