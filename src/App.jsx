import './App.css'
import AppLayout from './layout/app-layout';
import { Button } from './components/ui/button';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landing';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import MyJob from './pages/my-job';
import Onboarding from './pages/onboarding';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-job';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <LandingPage/>
        },
        {
          path: '/onboarding',
          element: <Onboarding/>
        },
        {
          path: '/jobs',
          element: <JobListing/>
        },
        {
          path: '/job/:id',
          element: <JobPage/>
        },
        {
          path: 'post-job',
          element: <PostJob/>
        },
        {
          path: 'saved-job',
          element: <SavedJobs/>
        },
        {
          path: 'my-job',
          element: <MyJob/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App
