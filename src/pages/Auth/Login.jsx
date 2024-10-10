import assets from "../../assets";

const Login = () => {
  return (
    <div className=" py-100 bg-darkBlue2">
      <div className="grid grid-cols-12 gap-2">
        <div className="ml-10 col-span-12 lg:col-span-6 border rounded-2xl border-gray-800 p-8 bg-black1">
          <h1 className="text-center pb-8 font-bold text-3xl">Login</h1>
          <div className="flex items-center  gap-4">
            <button className="w-full py-3 px-2 rounded-xl border border-gray-800">
              Continue with Google
            </button>
            <button className="w-full py-3 px-2 rounded-xl border border-gray-800">
              Continue with Facebook
            </button>
          </div>

          <div className="flex items-center gap-3 py-10">
            <hr className="w-full border-gray-800 " />
            or
            <hr className="w-full border-gray-800 " />
          </div>

          <form action="" className="space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">Your Email*</label>
                <input
                  className="px-3 py-3 rounded-lg bg-black border border-gray-700/70 "
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="password">Your Password*</label>
                <input
                  className="px-3 py-3 rounded-lg bg-black border border-gray-700/70 "
                  type="password"
                  placeholder="Your Password"
                />
              </div>
            </div>
            <p>
              Forgot Password?
              <span className="underline font-semibold">Reset</span>
            </p>
            <button className="w-full py-5 rounded-2xl bg-blue-500 text-white">
              Login
            </button>
          </form>
          <p className="mt-3">
            Don&apos;t have an account yet?{" "}
            <span className="underline font-semibold">Sign up now</span>
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <img className="w-full " src={assets.icons.login} alt="login_png" />
        </div>
      </div>
    </div>
  );
};

export default Login;
