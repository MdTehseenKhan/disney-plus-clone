import { auth, provider } from "../firebase"

import Logo from "../assets/images/logo.svg"

import HomeIcon from "../assets/images/home-icon.svg"
import SearchIcon from "../assets/images/search-icon.svg"
import WatchlistIcon from "../assets/images/watchlist-icon.svg"
import OriginalsIcon from "../assets/images/originals-icon.svg"
import MoviesIcon from "../assets/images/movies-icon.svg"
import SeriesIcon from "../assets/images/series-icon.svg"

const Header = () => {
  const handleAuth = async () => {
    try {
      result = await auth.signInwithPopup(provider)

      console.log(result)

      if (!result) throw new Error()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <nav className="nav fixed w-full bg-[#090b13] h-[70px] p-9 flex justify-between items-center z-10">
      <div className="logo w-20 mt-1 max-h-[70px]">
        <img src={Logo} alt="Disney Logo" className="w-full" />
      </div>
      <div className="nav-menu flex-nowrap items-center justify-end relative mr-auto ml-6 hidden md:flex">
        <a className="nav-item">
          <img src={HomeIcon} alt="home-icon" />
          <span>HOME</span>
          <div className="bar"></div>
        </a>
        <a className="nav-item">
          <img src={SearchIcon} alt="search-icon" />
          <span>SEARCH</span>
        </a>
        <a className="nav-item">
          <img src={WatchlistIcon} alt="watchlist-icon" />
          <span>WATCHLIST</span>
        </a>
        <a className="nav-item">
          <img src={OriginalsIcon} alt="originals-icon" />
          <span>ORIGINALS</span>
        </a>
        <a className="nav-item">
          <img src={MoviesIcon} alt="movies-icon" />
          <span>MOVIES</span>
        </a>
        <a className="nav-item">
          <img src={SeriesIcon} alt="series-icon" />
          <span>SERIES</span>
        </a>
      </div>
      <button
        className="login-btn tracking-[1.5px] uppercase rounded bg-[#0005] text-[#f9f9f9] border px-4 py-2 transition hover:bg-[#f9f9f9] hover:text-[#000] hover:border-transparent"
        onClick={handleAuth}
      >
        Login
      </button>
    </nav>
  )
}

export default Header
