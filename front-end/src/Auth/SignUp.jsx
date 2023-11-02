import FormInput from "./FormInput";
import SignButton from "./SignButton";
import { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, username, password };
    console.log(data);
  };

  return (
    <>
      <h1 className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">
        Sign Up
      </h1>
      <form className="flex flex-col">
        <div className="flex flex-col">
          <FormInput
            label="First Name"
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormInput
            label="Last Name"
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormInput
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
        <SignButton content="Sign Up" onClick={handleSignUp} />
      </form>
      {/* {isNotFound && (
        <p className="text-red-600 text-sm">
          Username or password is incorrect
        </p>
      )} */}
    </>
  );
};

export default SignUp;
