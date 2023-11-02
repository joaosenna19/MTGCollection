import ProductInfo from "./ProductInfo";
import AuthPage from "./Auth/AuthPage";

const SignIn = () => {
  return (
    <>
      <div className="justify-center items-center min-h-screen grid grid-cols-1 md:grid-cols-2 gradient-form">
        <AuthPage />
        <ProductInfo />
      </div>
    </>
  );
};

export default SignIn;
