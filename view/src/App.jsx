import "./App.css";
import { ContextProviders } from "./context-api/ContextProviders";
import { RequireAuth } from "./utils/RequireAuth";
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
import { Login } from "./components/login/Login";
import { Products } from "./components/products/Products";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route
        path="profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="products" element={<Products />} />
    </Route>
  )
);

function App() {
  return (
    <main className="App">
      <ContextProviders>
        <RouterProvider router={appRouter} />
      </ContextProviders>
    </main>
  );
}

export default App;
