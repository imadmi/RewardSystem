import Sidebar from "./components/Sidebar";
import Content from "./Content";

function App() {
  return (
    <div className="flex flex-row flex-1 h-screen bg-gray-500">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
