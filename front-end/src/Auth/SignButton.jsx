import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const SignInButton = ({ onClick, content }) => {
  return (
    <button
      onClick={onClick}
      className=" my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {content}
    </button>
  );
};

SignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SignInButton;
