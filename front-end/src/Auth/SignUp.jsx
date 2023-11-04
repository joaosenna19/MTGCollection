import FormInput from "./FormInput";
import SignButton from "./SignButton";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isBeingUsed, setIsBeingUsed] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      emailAddress,
      username,
      password,
    };
    fetch("http://127.0.0.1:3001/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log("Success");
            localStorage.setItem("token", data.token);
            navigate("/displaycards");
          });
        } else {
          return response.json().then((errorData) => {
            console.error(errorData);
            setIsBeingUsed(!isBeingUsed);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
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
      <p>{emailAddress}</p>
      {isBeingUsed && (
        <p className="text-red-600 text-sm">
          Username or email is alredy in use
        </p>
      )}
    </>
  );
};

export default SignUp;
