import { Link } from "react-scroll"

const Navbar = ({navLinks, openMobileNav, setOpenMobileNav}) => { 

  return (
    <nav className="flex justify-between min-w-full z-10 sticky top-0 bg-black">
        <div>
            <h1 className="md:text-5xl md:pl-6 text-2xl p-4" style={{fontFamily: 'Staatliches, cursive'}}>Jashawn Rogers</h1>
        </div>
        <button
          className="md:hidden flex pl-40 py-8 z-20 relative w-10 h-10 text-white focus:outline-none"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
            className={`absolute h-0.5 w-10 bg-white transform transition duration-300 ease-in-out ${
              openMobileNav ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
            ></span>
            <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              openMobileNav ? "w-0 opacity-50" : "w-10 delay-200 opacity-100"
            }`}
            ></span>
            <span
            className={`absolute h-0.5 w-10 bg-white transform transition duration-300 ease-in-out ${
              openMobileNav ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
            ></span>
          </div>
        </button>
        <ul className="hidden md:flex" style={{fontFamily: 'Staatliches, cursive'}}>
          {
            navLinks.map((link) => (

              <li key={link.name} className="md:p-3 cursor-pointer md:flex md:items-center py-5 text-2xl">
                <Link
                activeClass="active"
                to={link.name}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className="after:absolute after:z-[-1] after:mix-blend-multiply hover:text-green-700"
                >
                {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}

export default Navbar