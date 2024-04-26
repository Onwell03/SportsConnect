import './App.css'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Edit from './pages/football/Edit';
import Create from './pages/Create';
import PostInfo from './pages/PostInfo';
import Home from './pages/Home';
import Football from './pages/football/Football';

function App() {

  let element = useRoutes([
    {
      path:"/edit/:id",
      element: <Edit />
    },
    {
      path:"/create",
      element: <Create />
    },
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/football",
      element: < Football/>
    },
    {
      path:"/football/:id",
      element:<PostInfo/>
    }
  ]);

  return (
    <div className="page">
      < Navigation />
      <div className="main">
        {element}
      </div>
      <Footer />
      
    </div>
  )
}

export default App;

