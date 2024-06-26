import { useSelector } from "react-redux";
import Routes from "./Routes";
import { RootState } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return <Routes user={isAuthenticated} />;
}

export default App;
