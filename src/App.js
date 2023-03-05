import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
