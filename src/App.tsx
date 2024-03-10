import { Toaster } from "react-hot-toast";
import routers from "./routers";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
      <Toaster />
    </>
  );
};

export default App;
