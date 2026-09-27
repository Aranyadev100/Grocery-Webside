import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { useShop } from "../../context/useShop";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount, wishlist } = useShop();

  const submitSearch = (event) => {
    event.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      <nav className="max-w-[1400px] mx-auto px-10 h-[12vh] md:h-[14vh] flex justify-between items-center relative">

        
        <Link to="/" className="text-3xl font-semibold">
          Gro<span className="text-orange-500 uppercase">V</span>ana
        </Link>

        
        <ul className="hidden md:flex items-center gap-x-10">
          <li>
            <Link to="/" className="font-semibold tracking-wider text-orange-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/process" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Process</Link>
          </li>
          <li>
            <Link to="/contact" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Contact Us</Link>
          </li>
        </ul>

        { }
        <div className="flex items-center gap-x-5">
          <form onSubmit={submitSearch} className="hidden md:flex p-1 border-2 border-orange-500 rounded-full items-center">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="px-3 focus:outline-none bg-transparent h-5"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit" aria-label="Search" className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer transition-all hover:scale-105">
              <IoSearch />
            </button>
          </form>

          <Link to="/wishlist" aria-label="Wishlist" className="relative text-zinc-800 text-2xl hover:text-orange-500 transition-colors">
            <GoHeartFill />
            {wishlist.length > 0 && <span className="absolute -top-3 -right-3 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" aria-label="Shopping cart" className="relative text-zinc-800 text-2xl hover:text-orange-500 transition-colors">
            <HiShoppingBag />
            {cartCount > 0 && <span className="absolute -top-3 -right-3 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
          </Link>

          <button
            className="md:hidden text-zinc-800 text-3xl z-50 cursor-pointer"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        { }
        <ul
          className={`absolute top-[12vh] w-3/4 max-w-sm flex flex-col items-center gap-y-8 py-10 bg-orange-500/15 backdrop-blur-xl transition-all duration-500 md:hidden rounded-2xl shadow-xl z-40 transform -translate-x-1/2 ${showMenu ? "left-1/2" : "-left-full"
            }`}
        >
          
          <li>
            <Link to="/" onClick={toggleMenu} className="font-semibold tracking-wider text-orange-500">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu} className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/process" onClick={toggleMenu} className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Process</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu} className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Contact Us</Link>
          </li>
          <li>
            <Link to="/wishlist" onClick={toggleMenu} className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Wishlist {wishlist.length > 0 && `(${wishlist.length})`}</Link>
          </li>
          <li>
            <Link to="/cart" onClick={toggleMenu} className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Cart {cartCount > 0 && `(${cartCount})`}</Link>
          </li>
          <li>
            <Link to="/account" onClick={toggleMenu} className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors">Account</Link>
          </li>

          <li className="w-full px-8 mt-4">
            <form onSubmit={submitSearch} className="flex p-1 border-2 border-orange-500 rounded-full items-center bg-white">
              <input
                type="text"
                placeholder="Search..."
                autoComplete="off"
                className="px-3 focus:outline-none bg-transparent w-full h-8"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button type="submit" aria-label="Search" className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer transition-all hover:scale-105 shrink-0">
                <IoSearch />
              </button>
            </form>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;