import React from "react";

export default function RegisterForm() {
  return (
    <>
      <div className="relative w-full lg:w-1/2 hidden lg:block">
        <img
          src="img/auth-img.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-start space-y-6 py-20">
          <h2 className="text-white text-5xl font-bold text-center px-4">
            Tastico
          </h2>
            <p className="text-[28px] text-white px-5 text-center">Authentic taste. Fresh ingredients. Only at Tastico.</p>
        </div>
      </div>

      <div className="w-full h-full lg:w-1/2 bg-[#FDFDFD]">
        <div className="flex flex-col items-center justify-center py-2 lg:py-16 px-10 lg:px-22  min-h-screen">
          <div className="flex flex-col items-center justify-center text-[#6D4F25] gap-2 lg:gap-5 text-center">
            <h1 className="text-[#6D4F25] text-4xl font-bold">Register</h1>
            <p className="text-[#262523] text-lg lg:text-xl">
              Log in to enjoy your favorite meals and exclusive deals.
            </p>
          </div>
          <form className="w-full py-5 flex flex-col text-[#262523] text-lg space-y-5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Input Your Username"
              className="text-base py-3 px-6 border border-[#262523] rounded-2xl"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create Your Password"
              className="text-base py-3 px-6 border border-[#262523] rounded-2xl"
            />
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Your Password"
              className="text-base py-3 px-6 border border-[#262523] rounded-2xl"
            />
            <button
              type="submit"
              className="w-full my-5 bg-[#6D4F25] font-bold py-4 text-white rounded-[30px] "
            >
              Register
            </button>
          </form>
          <p className="text-lg text-center">
            Already have an Account? <a href="login" className="text-[#6D4F25] font-bold">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}
