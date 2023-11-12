import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "./FormInput";
import SignButton from "./SignButton";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  const navigate = useNavigate();
  const handleSignIn = (e) => {
    setIsNotFound(false);
    e.preventDefault();
    const data = { username, password };
    fetch("https://mtgcollectionapi.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success");
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("/collection");
      })
      .catch(() => {
        setIsNotFound(true);
        setTimeout(() => {
          setIsNotFound(false);
        }, 4000);
      });
  };

  return (
    <>
      <h1 className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">
        Sign In
      </h1>
      <form className="flex flex-col">
        <div className="flex flex-col">
          <FormInput
            label="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <SignButton content="Sign In" onClick={handleSignIn} />
      </form>
      {isNotFound && (
        <p className="text-red-600 text-sm">
          Username or password is incorrect
        </p>
      )}
    </>
  );
};

export default SignInForm;
