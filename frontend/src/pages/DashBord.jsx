import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import SendMoney from "../components/SendMoney";
import { useNavigate } from "react-router-dom";
import { allUserAtom } from "../store/atom/allUserInDbAtom.jsx";
import { useRecoilState, useSetRecoilState } from "recoil";
import { accUrl, userUrl } from "../consant.js";
import {
  emailAtom,
  firstNameAtom,
  lastNameAtom,
  balanceAtom,
} from "../store/atom/logedinUserInfoAtom.jsx";
import {recIdAtom, recFirstNameAtom,recLastNameAtom, recEmailAtom} from "../store/atom/receiverInfoAtom.jsx"
import axios from "axios";

const DashBord = () => {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useRecoilState(allUserAtom);
  const [firstName, setFristName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [email,setEmail] = useRecoilState(emailAtom)
  const [balance, setBalance] = useRecoilState(balanceAtom);
  const setRecId = useSetRecoilState(recIdAtom);
  const setRecFirstName = useSetRecoilState(recFirstNameAtom);
  const setRecLastName = useSetRecoilState(recLastNameAtom);
  const setRecEmail = useSetRecoilState(recEmailAtom);
  const [searchUser, setSearchUser] = useState("");

  function delay(callback) {
   const tid = setTimeout(() => {
      callback();
    }, 500);

    return tid
  }

  // fetch teh current loged in user infos
  async function findCurrentUserInfo() {
    // check if there is no authorization token
    if (!localStorage.getItem("token")) {
      delay(() => {
        navigate("/signin");
        return;
      });
      return;
    }

    // find the information of the current loged in user
    const logedUserInfoRes = await axios.get(`${userUrl}getuserinfo/`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
   
    const getBalRes = await axios.get(`${accUrl}getbalance/`,{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })

    // set the values to the atoms
    setEmail(logedUserInfoRes.data.data.userName);
    setFristName(logedUserInfoRes.data.data.firstName);
    setLastName(logedUserInfoRes.data.data.lastName);
    setBalance(getBalRes.data.data.balance);
    
  }

  //fetch all the use from the data base
  useEffect(() => {
    const tid = setTimeout(async () => {
      const allUserRes = await axios.get(
        `${userUrl}findall?filter=${searchUser}`
      );
      setAllUser(allUserRes.data.data);
    }, 100);
    return () => clearTimeout(tid);
  }, [searchUser]);

  // getch the current loged in user info
  useEffect(() => {
    const tid = delay( ()=>{ findCurrentUserInfo() });
    return ()=> clearTimeout(tid)
  }, []);


  return (
    <section className="bg-gray-900 h-screen flex items-center justify-center  text-white font-sans">
      <div className="main-dashbord w-full h-full bg-gray-800  lg:w-5/6 lg:h-5/6 lg:rounded-xl">
        <nav className="h-24 flex items-center justify-around bg-gray-700 lg:rounded-xl ">
          <h1 className="text-xl lg:text-2xl font-bold ">PayVibe</h1>
          <div className="acc-info flex gap-4 items-center text-lg lg:text-xl font-semibold ">
            <p>
              <span>Hello,</span>
              {` ${firstName} ${lastName}`}
            </p>
            <div
              className="text-blue-500 name-logo h-10 w-10 lg:h-14 lg:w-14 flex items-center justify-center rounded-full bg-gray-900 font-serif cursor-pointer"
              onClick={() => {
                // vavigatet to the account information
                navigate("/account");
              }}
            >
              {firstName[0].toUpperCase()}
            </div>
          </div>
        </nav>
        <div className="buttom text-lg lg:text-2xl lg:font-semibold font-bold mx-4 mt-4 flex flex-col gap-4">
          <p>User: {email}</p>
          <p>Your balance: {balance}</p>
          <div>
            <label for="password" className="block mb-2 ">
              Search users
            </label>
            <InputBox
              prop={{
                type: "text",
                class:
                  "bg-gray-700 border placeholder-gray-400  border-gray-600 text-white text-sm lg:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                onChange: (e) => {
                  setSearchUser(e.target.value);
                },
              }}
            ></InputBox>
          </div>
          <div className="pay-container mt-6 w-full flex flex-col gap-4 max-h-80 lg:h-72 overflow-y-scroll pr-4 lg:scrollbar">
            {/* pay card start */}
            {allUser.map((e) => {
              return (
                <SendMoney
                  key={e.userName.split("@")[0]}
                  prop={{
                    
                    userName: e.userName,
                    firstName: e.firstName,
                    lastName: e.lastName,
                    index: allUser.indexOf(e) + 1,
                    onClick: () => {
                      setRecId(e._id)
                      setRecFirstName(e.firstName)
                      setRecLastName(e.lastName)
                      setRecEmail(e.userName)
                      navigate("/payment");
                    },
                  }}
                ></SendMoney>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBord;
