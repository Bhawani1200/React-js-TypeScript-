import Routes from './Routes'
import { isAuthenticated } from './api/auth';
function App() {
  const user=isAuthenticated();
  return <Routes user={user} />;
}
export default App;
