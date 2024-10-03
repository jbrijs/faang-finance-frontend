import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
