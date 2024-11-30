import "./App.css";
import AppLayout from "./layout/app-layout";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing";
import JobListing from "./pages/job-listing";
import JobPage from "./pages/job";
import MyJob from "./pages/my-job";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-job";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          ),
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "post-job",
          element: (
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          ),
        },
        {
          path: "saved-jobs",
          element: (
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "my-jobs",
          element: (
            <ProtectedRoute>
              <MyJob />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
