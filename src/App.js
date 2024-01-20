import Habbitlist from "./Component/habbitlist";
import Navbar from "./Component/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import ViewDetail from "./Component/viewDetail";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
            path="/"
            element={
              <>
                <Navbar />
                <Habbitlist />
              </>
            }
          />
        <Route path="/viewDetail" element={<ViewDetail />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
