import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
      <Link className="text-black text-xl text-center ">MTG Collection</Link>
      <Link className="text-black text-base text-center">Log out</Link>
    </nav>
  );
};

export default NavBar;
