import { Link } from "react-router-dom";
import assets from "../../assets";

const Login = () => {
  return (
    <div className=" bg-darkBlue2 relative overflow-hidden">
      <div className="grid grid-cols-12 gap-2 items-center">
        <div className="col-span-12 lg:col-span-7 bg-black1 pt-10 pb-10 lg:pr-20 lg:pl-10 px-2 lg:px-0">
          <Link to="/">
            <img src={assets.icons.logo} alt="logo" />
          </Link>
          <div className="lg:ml-10 z-[5] bg-black1 border rounded-2xl border-gray-800 p-6 relative mt-5">
            <h1 className="text-center pb-8 font-bold text-3xl">Log In</h1>
            <div className="flex items-center  gap-4 text-xs">
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
                <div className="flex flex-col space-y-3">
                  <label className="text-sm text-" htmlFor="email">
                    Your Email*
                  </label>
                  <input
                    className="px-3 py-3 rounded-lg bg-black border border-gray-700/70 text-sm"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-sm " htmlFor="password">
                    Your Password*
                  </label>
                  <input
                    className="px-3 py-3 rounded-lg bg-black border border-gray-700/70 text-sm"
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>
              <p className=" text-sm text-gray-300">
                Forgot Password?{" "}
                <span className="underline font-semibold">Reset</span>
              </p>
              <button className="w-full py-5 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all">
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-300 text-center">
              Don&apos;t have an account yet?{" "}
              <Link to="/sign-up" className="underline font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 max-lg:hidden">
          <img className="w-full " src={assets.icons.login} alt="login_png" />
        </div>
      </div>
      {/* background shadows */}
      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-0 blur-[85px] left-[-5%] bg-[#12CE95]/50"></div>
      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-0 blur-[85px] -right-[5%] bg-[#12CE95]/50"></div>
      <img
        src={assets.icons.ellipse}
        className="absolute hidden lg:block right-0 bottom-[-15%] z-[5] selector"
        alt="ellipse"
      />
    </div>
  );
};

export default Login;
