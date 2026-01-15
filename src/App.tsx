import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Recipes from './pages/Recipes'
import Favorites from './pages/Favorites'
import RecipeDetail from './pages/RecipeDetail'
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail'

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<Home/>} />

        <Route path='discover' element={<Discover/>} />
        {/* categories nested route w category page */}
        <Route path='categories'>
          <Route index element={<Categories/>} />
          <Route path=':slug' element={<CategoryDetail/>} />
        </Route>

        {/* recipes nested route w recipe pge */}
        <Route path='recipes'>
          <Route index element={<Recipes/>} />
          <Route path=':slug' element={<RecipeDetail />} />
        </Route>
        
        <Route path='favorites' element={<Favorites/>} />
      </Routes>
    </>
  )
}

export default App
