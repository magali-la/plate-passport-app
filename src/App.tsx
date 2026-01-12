import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Recipes from './pages/Recipes'
import Favorites from './pages/Favorites'
import RecipeDetail from './pages/RecipeDetail'

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<Home/>} />
        <Route path='discover' element={<Discover/>} />
        <Route path='recipes'>
          <Route index element={<Recipes/>} />
          <Route path=':idMeal' element={<RecipeDetail />} />
        </Route>
        <Route path='favorites' element={<Favorites/>} />
      </Routes>
    </>
  )
}

export default App
