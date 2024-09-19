import React, { useEffect } from "react";
import HistoryCard from "../components/HistoryCard.jsx";
import Button from "../components/Button.jsx";
import {
  emailAtom,
  firstNameAtom,
  lastNameAtom,
  balanceAtom,
  paymentHistoryAtom,
} from "../store/atom/logedinUserInfoAtom.jsx";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";
import { userUrl } from "../consant.js";
import { useNavigate, NavLink } from "react-router-dom";
import Tc from "../store/toasts/Tc.jsx";
import { errorToast } from "../store/toasts/errorToast.js";
const AccountInfo = () => {
  const navigate = useNavigate();
  // set the atoms for values
  const [firstName,setFirstName] = useRecoilState(firstNameAtom);
  const [lastName,setLastName] = useRecoilState(lastNameAtom);
  const [email,setEmail] = useRecoilState(emailAtom);
  const [balance,setBalance] = useRecoilState(balanceAtom);
  const [paymentHistory, setPaymentHistory] =
    useRecoilState(paymentHistoryAtom);

  // function to delay
  function delay(callback, time) {
    const tid = setTimeout(() => {
      callback();
    }, time);
    return tid;
  }
  // fetch the payment history of the current loged in user
  async function getPaymentHistory() {
    try {
      const paymentHistoryRes = await axios.get(`${userUrl}gethistory/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setPaymentHistory(paymentHistoryRes.data.data);
    } catch (error) {
      console.log("find some error to get payment history", error);
      return;
    }
    return;
  }

  useEffect(() => {
    if (email === "Unknow") {
      navigate("/dashbord");
      return;
    }
    delay(() => {
      getPaymentHistory();
    }, 500);
    return () => {
      setPaymentHistory([
        {
          senderName: "unknown",
          senderEmail: "unknown",
          receiverName: "unknow",
          receiverEmail: "unkonw",
          amount: "0",
          time: "xx xx 00 0000 00:00:00",
        },
      ]);
    };
  }, []);
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8  rounded-lg shadow-xl bg-gray-800">
            <h2 className="text-2xl font-bold  text-white">
              Account Details
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-cente gap-2">
                <label className=" text-sm font-medium text-white">
                  Email:
                </label>
                <p className="text-sm w-full text-white ">{`${email}`}</p>
              </div>
              <div className="flex items-cente gap-2">
                <label className=" text-sm font-medium  text-white">
                  Name:
                </label>
                <p className="text-sm w-full text-white ">{`${firstName} ${lastName}`}</p>
              </div>
              <div className="flex items-cente gap-2">
                <label className=" text-sm font-medium text-white">
                  Balance:
                </label>
                <p className="text-sm w-full text-white">{`${balance}`}</p>
              </div>
              <div className="text-sm font-medium text-white">
                Want to leave? Click here to{" "}
                <Button
                  prop={{
                    name: "Log out.",
                    class:
                      " hover:underline text-blue-500 cursor-pointer",
                    onClick: (e) => {
                      e.target.disabled = true;
                      setFirstName("U");
                      setLastName("");
                      setEmail("");
                      setBalance(0);
                      errorToast("Loging out the user");
                      //show toast
                      delay(() => {
                        localStorage.removeItem("token");
                        navigate("/signin");
                      }, 1500);
                    },
                  }}
                ></Button>
              </div>
              <Button
                prop={{
                  name: "Update account",
                  class:
                    "w-full px-5 py-3 text-base font-medium text-center text-white  rounded-lg   focus:ring-blue-300 sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 mr-2",
                  onClick: (e) => {
                    e.target.disabled = true;
                    delay(() => {
                      navigate("/account/update");
                    }, 500);
                  },
                }}
              ></Button>
              <Button
                prop={{
                  name: "Delete account",
                  class:
                    "w-full px-5 py-3 text-base font-medium text-center text-white  rounded-lg  focus:ring-4  sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 mr-2",
                  onClick: (e) => {
                    e.target.disabled = true;
                    delay(() => {
                      navigate("/account/delete");
                    }, 500);
                  },
                }}
              ></Button>
              <div className="text-sm font-medium text-white">
                Go back to{" "}
                <NavLink
                  to="/dashbord"
                  className=" hover:underline text-blue-500 cursor-pointer"
                >
                  home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none  md:text-xl lg:text-2xl text-white">
            Track Your Transactions, Secure Your Spending.
          </h1>
          {/* history card */}
          <div className="card-containder overflow-y-scroll pr-6 max-h-72 scrollbar">
            {
              /* card */
              paymentHistory.map((e) => {
                return (
                  <HistoryCard
                    prop={{
                      time: ` ${e.time.split(` `)[0]} ${e.time.split(` `)[1]} ${
                        e.time.split(` `)[2]
                      } ${e.time.split(` `)[3]} ${e.time.split(` `)[4]}`,
                      senderName: e.senderName,
                      receiverName: e.receiverName,
                      amount: e.amount,
                    }}
                  ></HistoryCard>
                );
              })
            }
          </div>
        </div>
      </div>

      {/* toast container */}
      <Tc></Tc>
    </section>
  );
};

export default AccountInfo;
