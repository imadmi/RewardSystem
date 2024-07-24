import SummaryPoints from "./components/SummaryPoints";
import Header from "./components/Header";
import CustomarList from "./components/CustomerList";
import Promotions from "./components/Promotions";
import { useSelector } from "react-redux";
import SidbarModal from "./components/SidbarModal";

export type State = {
  SidebarComponent: {
    activeSidebarComponent: string;
  };
  navBar: {
    isNavbarOpen: boolean;
  };
};

function Content() {
  const activeComponent = useSelector(
    (state: State) => state.SidebarComponent.activeSidebarComponent
  );
  const isOpen = useSelector((state: State) => state.navBar.isNavbarOpen);

  return (
    <div className="flex flex-1 flex-col md:rounded-l-3xl bg-gray-100 relative overflow-clip">
      <Header />
      {activeComponent === "PointsSummary" && <SummaryPoints />}
      {activeComponent === "Customers" && <CustomarList />}
      {activeComponent === "Promotions" && <Promotions />}
      {isOpen  && <SidbarModal />}
    </div>
  );
}

export default Content;
