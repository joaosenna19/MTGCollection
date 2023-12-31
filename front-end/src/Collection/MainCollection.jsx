import NavBar from "./NavBar";
import CardTable from "./CardTable";
import AddCards from "./AddCards";

const MainCollection = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen  bg-neutral-700">
        <div className="flex flex-col">
          <h2 className="m-auto pt-7 text-white text-lg">Collection</h2>
          <AddCards />
          <CardTable />
        </div>
      </div>
    </>
  );
};

export default MainCollection;
