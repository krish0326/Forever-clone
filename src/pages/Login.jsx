import React, { useState } from "react";

function Login() {
  const [currentsate, setcurrentsate] = useState("Sign up");
 const onsubmitHandler = async (event) => {
  event.preventDefault();
}

  return (
    <form onSubmit={onsubmitHandler} className="flex flex-col items-center w-[90%]  sm:max-w-96  m-auto mt-14 gap-4  text-gray-800">
      <div className="inline-flex items-center gap-2  mb-2 mt-10">
        <p className="prata-regular  text-3xl ">{currentsate}</p>
        <hr className=" border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentsate === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password?</p>
        {currentsate === "Login" ? (
          <p
            onClick={() => setcurrentsate("Sign up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p onClick={() => setcurrentsate("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentsate === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}

export default Login;
