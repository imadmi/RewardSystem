import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, setNavBar } from "../store/reducers/rootReducer";
import { State } from "../Content";

function SidbarModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: State) => state.navBar.isNavbarOpen);

  return (
    <div
      className="flex md:hidden fixed top-20 left-0 text-1xl font-mono font-normal 
      w-screen bg-gray-100 pl-[5%]  h-screen z-20 er "
    >
      <ul className="space-y-8 text-black hover:cursor-pointer mt-8">
        <li
          onClick={() => {
            dispatch(setActiveComponent("PointsSummary"));
            dispatch(setNavBar(!isOpen));
          }}
        >
          Points Summary
        </li>
        <li
          onClick={() => {
            dispatch(setActiveComponent("Customers"));
            dispatch(setNavBar(!isOpen));
          }}
        >
          Customers
        </li>
        <li
          onClick={() => {
            dispatch(setActiveComponent("Promotions"));
            dispatch(setNavBar(!isOpen));
          }}
        >
          Promotions
        </li>
      </ul>
    </div>
  );
}

export default SidbarModal;
