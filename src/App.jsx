import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import JobListing from "./pages/JobListing.jsx";
import JobPage from "./pages/JobPage.jsx";
import SavedJobs from "./pages/SavedJobs.jsx";
import PostJob from "./pages/PostJob.jsx";
import MyJob from "./pages/MyJob.jsx";
import { ThemeProvider } from "./components/theme-provider.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:job",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      },
      {
        path: "/my-job",
        element: <MyJob />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
