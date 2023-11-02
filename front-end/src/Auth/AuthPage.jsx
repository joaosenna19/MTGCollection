import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import { useState } from "react";
import SignUp from "./SignUp";

const AuthPage = () => {
  const [hasAProfile, setHasAProfile] = useState(true);

  return (
    <>
      <div className="flex h-full flex-col flex-wrap items-center justify-center bg-neutral-700">
        {hasAProfile ? <SignInForm /> : <SignUp />}
        <Link className="my-3 align-baseline font-bold text-sm text-white hover:text-blue-800">
          Forgot Password?
        </Link>
        <p
          className="my-3 align-baseline font-bold text-sm text-white hover:text-blue-800"
          to="/signup"
          onClick={() => setHasAProfile(!hasAProfile)}
        >
          {hasAProfile ? "Create an account" : "Already have an account?"}
        </p>
      </div>
    </>
  );
};

export default AuthPage;
