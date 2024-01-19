import Hero from "../components/Fragments/Hero"
import Footer from "../components/Layout/Footer"
import Movies from "../components/Layout/Movies"
import NavbarBs from "../components/Layout/NavbarBs"
import Populer from "../components/Layout/Populer"

const MoviesPage = () => {
  return (
    <>
      <NavbarBs/>
      <Hero/>
      <Populer/>
      <Movies/>
      <Footer/>
    </>
  )
}

export default MoviesPage