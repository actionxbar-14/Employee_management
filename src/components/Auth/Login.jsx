import React, { useState } from "react";

const Login = () => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("form submitted");
        console.log("email:",email,"password:",password);

        setEmail('');
        setPassword('');
    }


  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600 p-20 border-emerald-600 rounded-xl">
        <form onSubmit={(e)=>{
            handleSubmit(e);
        }} className="flex flex-col items-center justify-center">
          <input
            className="text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 placeholder:text-gray-400 mt-3 rounded-full"
            type="email"
            value={email}
            onChange={(e)=>{
                 setEmail(e.target.value);
            }}
            placeholder="Enter Your Email :"
            required
          />
          <input
            className="text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 placeholder:text-gray-400 mt-3 rounded-full"
            type="password"
            value={password}
            onChange={(e)=>{
                 setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <button className="text-white outline-none bg-emerald  bg-emerald-600 py-2  px-6 placeholder:text-white mt-3 mb-4 rounded-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
