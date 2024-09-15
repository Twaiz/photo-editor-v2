import { RouterProvider } from 'react-router-dom';
import router from './components/Routing/Routing';
import './styles/Main.module.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
