
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './layout/route';

function App() {
  return <RouterProvider router={route}/>
}

export default App;
