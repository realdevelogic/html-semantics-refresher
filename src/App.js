import "./styles.css";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
