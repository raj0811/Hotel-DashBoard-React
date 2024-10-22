import React, { useState } from "react";
import { GET_USER, LOGIN_USER } from "../Qurries.js";
import { useMutation, useQuery } from "@apollo/client";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage({ user, set_user }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [LOGIN_TO_USER, { loading }] = useMutation(LOGIN_USER, {
    errorPolicy: "ignore",
  });
 
  const { refetch } = useQuery(GET_USER);
  const navigate = useNavigate();
  if (user) return <Navigate to="/"></Navigate>;

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/three-friends-sitting-top-mountain-enjoying-scenic-view_23-2148139706.jpg')] bg-cover bg-center filter blur-[2.5px]"></div>
      <div className="relative h-full w-full flex items-center justify-center" >
        <div className="w-[70%]  h-[70%] flex" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 8px 2px 150px' }}>
          <div className="w-[50%]">
            <img
              src="https://img.freepik.com/free-photo/couple-deck-chair-with-book-beach_23-2147649004.jpg?t=st=1719080974~exp=1719084574~hmac=04333bf0692cf2f3588b39bed78ee819a3230091b84ff441fe7c90f91a066d00&w=740"
              alt="img"
              className="w-full h-full blur-[1.5px]"
              
            />
          </div>
          <div className="w-[50%] flex items-center justify-center h-full">
            <form
              className="w-full flex flex-col p-3 "
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await LOGIN_TO_USER({
                  variables: {
                    email,
                    password,
                  },
                });
                if (res.data !== null) {
                  localStorage.setItem("token", res.data.loginUser.token);
                  await refetch().then((data) => {
                    if (data) set_user(data);
                  });
                  navigate("/");
                }
              }}
            >
              <div className="flex flex-col gap-y-2">
                <label
                  className="capitalize font-medium text-base"
                  htmlFor="emailId"
                >
                  Email
                </label>
                <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                    id="emailId"
                    placeholder="email@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  className="capitalize font-medium text-base pt-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="bg-white flex items-center pr-3 w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                    id="password"
                    placeholder="enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {passwordVisible ? (
                    <i
                      onClick={() => setPasswordVisible(false)}
                      className="fa-solid fa-eye-slash cursor-pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={() => setPasswordVisible(true)}
                      className="fa-solid fa-eye cursor-pointer"
                    ></i>
                  )}
                </div>
              </div>
              <div>
                <button className="bg-[#3b55ffd2] px-4 py-3 mt-5 rounded-lg w-[70%] h-[6vh] flex items-center justify-center text-lg font-semibold text-white">
                  {loading ? (
                    <i className="fa-solid animate-spin fa-spinner"></i>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
