import Home from './Pages/Home';
import './css/App.css'
import { Routes, Route} from "react-router-dom"
import Favorites from './Pages/Favorites';
import NavBar from './Components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
