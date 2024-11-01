import "./App.css";
import { AuthProvider } from "./utils/AuthContext";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Root } from "./components/Root/Root";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Profile } from "./components/profile/Profile";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <main className="App">
      <AuthProvider>
      <RouterProvider router={appRouter} />
      </AuthProvider>
    </main>
  );
}

export default App;
