import "./App.css";
import { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Root } from "./components/Root/Root";
import { LandingPagePic } from "./components/LandingPagePic/LandingPagePic";

const appRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}>
    <Route path="index"  element={<LandingPagePic />}/>
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
