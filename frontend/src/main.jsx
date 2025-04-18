import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { lazy } from "react";
const Signin = lazy(() => import("./pages/Signin.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const DashBord = lazy(() => import("./pages/DashBord.jsx"));
const Payment = lazy(() => import("./pages/Payment.jsx"));
const AccountInfo = lazy(() => import("./pages/AccountInfo.jsx"));
const DeleteAccount = lazy(() => import("./pages/DeleteAccount.jsx"));
const UpdateAccount = lazy(() => import("./pages/UpdateAccount.jsx"));
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <Suspense>
            <DashBord />
          </Suspense>
        }
      ></Route>
      <Route
        path="account/"
        element={
          <Suspense>
            <AccountInfo></AccountInfo>
          </Suspense>
        }
      ></Route>
      <Route
        path="account/delete/"
        element={
          <Suspense>
            <DeleteAccount></DeleteAccount>
          </Suspense>
        }
      ></Route>
      <Route
        path="account/update/"
        element={
          <Suspense>
            <UpdateAccount></UpdateAccount>
          </Suspense>
        }
      ></Route>
      <Route
        path="signin/"
        element={
          <Suspense>
            <Signin />
          </Suspense>
        }
      ></Route>
      <Route
        path="signup/"
        element={
          <Suspense>
            <Signup />
          </Suspense>
        }
      ></Route>
      <Route
        path="payment/"
        element={
          <Suspense>
            <Payment />
          </Suspense>
        }
      ></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router}></RouterProvider>
  </RecoilRoot>
);
