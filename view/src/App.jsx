import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Root } from "./components/Root/Root";
import { LandingPage } from "./components/LandingPage/LandingPage";


const appRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}>
    <Route index  element={<LandingPage />}/>
  </Route>)
);

function App() {
  return (
    <main className="App">
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
