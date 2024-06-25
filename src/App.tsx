import { useSelector } from "react-redux";
import Routes from "./Routes";
import { RootState } from "./redux/store";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return <Routes user={isAuthenticated} />;
}
export default App;
