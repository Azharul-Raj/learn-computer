import React, { useContext } from "react";
import github from "../../assets/icons8-github.svg";
import google from "../../assets/icons8-google.svg";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const {
    googleSignIn,
    githubSignIn,
    emailSignUp,
    completeProfile
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    emailSignUp(email, password)
      .then(result => {
        const profile = result.user;
        completeProfile(name,photo)
        console.log(profile);
        form.reset();
        <Navigate to='/login'/>
      })
    .catch(error=>{console.log(error)})
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
        <Navigate to='/'/>
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full pt-0 pb-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p className="text-2xl font-extrabold leading-6 text-gray-800">
            SignUp to your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Don't have account?{" "}
            <Link to="/login">
              <span className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                {" "}
                Login here
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
                Enter Your Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Image Url
              </label>
              <input
                type="url"
                name="img"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
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
                  {/* eye icon  */}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Create my account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
