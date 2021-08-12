import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApiData from "./hooks/useApiData";

import { Navbar, Sidebar } from "./Components";
import Router from "./Components/Routes/Router";

function App() {
  const apiData = useApiData();

  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        draggablePercent={60}
      />
      <div className="routesDiv">
        <Router />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
