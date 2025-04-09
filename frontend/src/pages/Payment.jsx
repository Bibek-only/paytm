import React, { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { accUrl } from "../consant";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { useRecoilState, useRecoilValue } from "recoil";
import { amountAtom } from "../store/atom/paymentAtom.jsx";
import { recIdAtom } from "../store/atom/receiverInfoAtom.jsx";
import {
  recEmailAtom,
  recFirstNameAtom,
  recLastNameAtom,
} from "../store/atom/receiverInfoAtom.jsx";
import { sucessToast } from "../store/toasts/sucessToast.js";
import { errorToast } from "../store/toasts/errorToast.js";
import Tc from "../store/toasts/Tc.jsx";
const Payment = () => {
  // set up the atoms
  const navigate = useNavigate();
  const [amount, setAmount] = useRecoilState(amountAtom);
  const recId = useRecoilValue(recIdAtom);
  const recFirstName = useRecoilValue(recFirstNameAtom);
  const recLastName = useRecoilValue(recLastNameAtom);
  const email = useRecoilValue(recEmailAtom);
  // delay functio that execute a functio after some time
  function delay(callback, e) {
    const tid = setTimeout(() => {
      e.target.disabled = false;
      callback();
    }, 1500);
    return;
  }

  async function handelPayment(e) {
    e.target.disabled = true; // disabled the payment button

    try {
      const paymentRes = await axios.put(
        `${accUrl}transfermoney`,
        {
          userId: recId,
          amount: Number.parseInt(amount),
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (!paymentRes.data.status === 200) {
        errorToast("Transation failed");
        delay(() => {
          navigate("/");
        }, e);
      }

      sucessToast("Transation successfull !");
      delay(() => {
        navigate("/");
      }, e);
    } catch (error) {
      //show the error toast
      errorToast("Transation failed");
      delay(() => {
        navigate("/");
      }, e);
    }
  }

  useEffect(() => {
    if (recId == "" || recId == null) {
      navigate("/");
      return;
    }

    return () => {
      setAmount(0);
    };
  }, []);

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-md:h-screen max-w-xl p-6 space-y-8 sm:p-8  rounded-lg shadow-xl bg-gray-800">
        <div className="heading-con ">
          <h2 className="text-2xl font-bold text-white mb-2">Pay money</h2>
          <p className="text-xl font-bold text-white">
            Send payments securely to anyone, anywhere.
          </p>
        </div>

        <div className="receiverInfo w-full mb-12 flex flex-col">
          <p className="text-xl font-bold text-white ml-2 mb-2">To</p>
          <div className="userName w-full flex items-center   gap-4 text-xl font-bold text-white">
            <div className="logo h-11 w-11 rounded-full border flex justify-center items-center bg-green-600">
              {recFirstName[0]}
            </div>
            <div className="userinfo felx flex-col">
              <p>{`${recFirstName} ${recLastName}`}</p>
              <p className="font-thin">{`user: ${email}`}</p>
            </div>
          </div>
        </div>
        <div>
          <label
            for="email"
            className="block mb-2 text-xl font-medium text-white"
          >
            Enter you amount
          </label>
          <InputBox
            prop={{
              type: "number",
              class:
                "border  text-lg rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",
              placeholder: "Enter amount",
              onChange: (e) => {
                setAmount(e.target.value);
              },
            }}
          ></InputBox>
        </div>
        <Button
          prop={{
            name: "Pay now",
            class:
              "w-full px-5 py-3  font-medium text-center bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 sm:w-auto mr-2",
            onClick: (e) => {
              if (amount === 0 || amount === null) {
                navigate("/");
                return;
              }

              handelPayment(e);
            },
          }}
        ></Button>

        <div className="mt-8 space-y-6 ">
          <NavLink to="/" className=" text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
            Go back
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
      </div>

      <Tc></Tc>
    </section>
  );
};

export default Payment;
