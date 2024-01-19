import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MoviesPage from "./pages/movies"
import MovieDetailPage from "./pages/movieDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
