import { useDispatch, useSelector } from "react-redux";
import { IoReorderThreeOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { setNavBar } from "../store/reducers/rootReducer";
import { State } from "../Content";

function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: State) => state.navBar.isNavbarOpen);
  console.log(isOpen);

  // const isOpen = true;

  return (
    <div className="h-20 w-full flex items-center text-2xl pl-[5%] font-sans bg-gray-100 justify-between">
      <div>Dashboard</div>
      {/* {isOpen && ( */}
      <button
        className="md:hidden rounded-full mr-4 p-2"
        onClick={() => dispatch(setNavBar(!isOpen))}
      >
        {isOpen ? <VscChromeClose size="32" /> : <IoReorderThreeOutline size="32" />}
        </button>
      {/* )} */}
    </div>
  );
}

export default Header;
