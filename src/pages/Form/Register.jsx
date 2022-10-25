import React, { useContext } from "react";
import github from "../../assets/icons8-github.svg";
import google from "../../assets/icons8-google.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const {
    googleSignIn,
    githubSignIn,
    emailLogin,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);
    emailLogin(email, password)
      .then((result) => {
        const profile = result.user;
        console.log(profile);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // google signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const profile = result.user;
        console.log(profile);
      })
      .catch((error) => console.log(error));
  };
  // github signIn
  const handleGitHubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const profile = result.user;
        console.log(profile);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full pt-0 pb-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            LogIn From Here
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Have an have account?{" "}
            <Link to="/register">
              <span className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                {" "}
                Sign Up Here
              </span>
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img className="h-7 w-7" src={google} alt="" />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <button
            onClick={handleGitHubSignIn}
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <img className="h-7 w-7" src={github} alt="" />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Github
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={handleSubmit} action="">
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Write Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  type="password"
                  name="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  {/* eye icon here */}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
