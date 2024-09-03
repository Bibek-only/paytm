import React from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { userUrl } from "../consant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sucessToast } from "../store/toasts/sucessToast.js";
import { errorToast } from "../store/toasts/errorToast.js";
import Tc from "../store/toasts/Tc.jsx";
import { emailAtom, passwordAtom } from "../store/atom/logedinUserInfoAtom.jsx";
import { useRecoilState } from "recoil";
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);

  async function handelSignin(e, userInfo) {
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 1500);

    try {
      const signinRes = await axios.post(`${userUrl}signin/`, userInfo);
      
      if (signinRes.data.status === 200) {
        sucessToast("Sign in the user");
        localStorage.setItem("token", `Bearer ${signinRes.data.data.token}`);
        setTimeout(() => {
          navigate("/dashbord");
        }, 1500);
      }

      if (signinRes.data.status === 400) {
        errorToast("something went wrong");
        return;
      }
    } catch (error) {
      errorToast(error.response.data.msg);
      return;
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Empowering your financial freedom
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            At PayVibe, we harness innovation and technology to create lasting
            value and fuel financial growth.
          </p>
          <NavLink
            to="/dashbord"
            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Go back to home
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
              Sign in to Flowbite
            </h2>
            <div className="mt-8 space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <InputBox
                  prop={{
                    type: "text",
                    class:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    placeholder: "Enter email",
                    onChange: (e) => {
                      setEmail(e.target.value);
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
                    placeholder: "Enter password",
                    onChange: (e) => {
                      setPassword(e.target.value);
                    },
                  }}
                ></InputBox>
              </div>

              <Button
                prop={{
                  name: "sign in",
                  class:
                    "w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  onClick: (e) => {
                    handelSignin(e, {
                      userName: email,
                      password: password,
                    });
                  },
                }}
              ></Button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?{" "}
                <span className="text-blue-600 hover:underline dark:text-blue-500">
                  <NavLink to="/signup">Create account</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* toast containe */}
      <Tc></Tc>
    </section>
  );
};

export default Signin;
