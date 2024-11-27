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
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";
import { Orders } from "./components/orders/Orders";

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
      <Route
        path="cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route
        path="checkout"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      />

      <Route
        path="orders"
        element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }
      />
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
