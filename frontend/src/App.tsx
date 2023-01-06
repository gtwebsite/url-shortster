import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>URL Shortster</h1>
      <Outlet />
    </div>
  );
}
