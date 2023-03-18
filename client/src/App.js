import NavigationBar from "./Components/NavigationBar";
import Admin from "./Components/Admin";
import Edit from "./Components/Edit";
import View from "./Components/View";
import Add from "./Components/Add";
import Pnf from "./Components/Pnf";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="" element={<Admin />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="view/:id" element={<View />} />
        <Route path={"*"} element={<Pnf/>} />
      </Routes>
    </div>
  );
}

export default App;
