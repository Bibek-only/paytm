import React from "react";
import { userUrl } from "../consant.js";
import { useNavigate } from "react-router-dom";
import {
  passwordAtom,
  firstNameAtom,
  lastNameAtom,
} from "../store/atom/logedinUserInfoAtom.jsx";
import InputBox from "../components/InputBox.jsx";
import Button from "../components/Button.jsx";
import { useRecoilState } from "recoil";
import axios from "axios";
import Tc from "../store/toasts/Tc.jsx";
import { sucessToast } from "../store/toasts/sucessToast.js";
import { errorToast } from "../store/toasts/errorToast.js";
import { NavLink } from "react-router-dom";
const UpdateAccount = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [firstName, setFristName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const navigate = useNavigate();
  function delay(callback, time, e) {
    setTimeout(() => {
      e.target.disabled = false;
      callback();
    }, time);
    return;
  }

  async function handelUpdateInfo(e) {
    e.target.disabled = true;
    try {
      const updateRes = await axios.put(
        `${userUrl}update/`,
        {
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (updateRes.data.status === 200) {
        sucessToast("sucessfully update the infos");
        delay(
          () => {
            navigate("/dashbord");
            return;
          },
          1500,
          e
        );
      }
    } catch (error) {
      errorToast("cant update the information");
      delay(
        () => {
          navigate("/account")
        },
        1500,
        e
      );
      return;
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Update your account information and correct any typos or errors.
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Stay Ahead with Our Latest Updates, Designed to Enhance Your Account
            Features and Secure Your Digital Experience for the Long Term.
          </p>
          <NavLink
            to="/account"
            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Go Home
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Update your account information
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <InputBox
                  prop={{
                    type: "text",
                    class:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    placeholder: "First Name",
                    onChange: (e) => {
                      setFristName(e.target.value);
                    },
                  }}
                ></InputBox>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <InputBox
                  prop={{
                    type: "text",
                    class:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    placeholder: "Last Name",
                    onChange: (e) => {
                      setLastName(e.target.value);
                    },
                  }}
                ></InputBox>
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <InputBox
                  prop={{
                    type: "text",
                    class:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    placeholder: "Password",
                    onChange: (e) => {
                      setPassword(e.target.value);
                    },
                  }}
                ></InputBox>
              </div>

              <Button
                prop={{
                  name: "Update account information",
                  class:
                    "w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  onClick: (e) => {
                    handelUpdateInfo(e);
                  },
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <Tc></Tc>
    </section>
  );
};

export default UpdateAccount;
