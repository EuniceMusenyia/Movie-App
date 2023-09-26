'use client';
import NavBar from './components/Navbar';
import Carousel from './components/Slider';
import GenreList from './Get-genres/page';
// import Movies from './components/getMovies';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main>
      <div>
        <NavBar/>
        <Carousel/>
        {/* <Movies/> */}
        <GenreList/>

        <Footer/>
      </div>
    </main>
  )
}