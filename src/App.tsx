import { Home } from "./Pages/Home";
import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./components/Contexts/TaskContext/TaskContextProvider";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
