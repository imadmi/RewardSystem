import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent } from "../store/reducers/rootReducer";
import { State } from "../Content";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const activeComponent = useSelector(
    (state: State) => state.SidebarComponent.activeSidebarComponent
  );

  return (
    <>
      <div
        className={`hidden md:flex h-full bg-gray-500 p-4 
            transition-transform transform  md:translate-x-0 
            sm:w-64 items-center justify-center font-sans font-semibold text-lg
          `}
      >
        <ul className="space-y-4 text-gray-300 hover:cursor-pointer">
          <li className={`${activeComponent === "PointsSummary" ? "text-white font-bold" : ""}`} 
          onClick={() => dispatch(setActiveComponent("PointsSummary"))}>
            Points Summary
          </li>
          <li className={`${activeComponent === "Customers" ? "text-white font-bold" : ""}`}  onClick={() => dispatch(setActiveComponent("Customers"))}>
            Customers
          </li>
          <li className={`${activeComponent === "Promotions" ? "text-white font-bold" : ""}`}  onClick={() => dispatch(setActiveComponent("Promotions"))}>
            Promotions
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
