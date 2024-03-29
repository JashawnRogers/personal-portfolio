import { Link } from "react-scroll"

const MenuOverlay = ({openMobileNav, setOpenMobileNav, navLinks}) => {
  return (
    <div>
        <nav className={`fixed w-full flex flex-col items-center z-40 px-10 pt-24 bg-black transform delay-100 transition-all duration-300 ${
        openMobileNav ? "opacity-80 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
        style={{fontFamily: 'Staatliches'}}
      >
            <ul className="z-30">
               {
                navLinks.map((link) => (
                    <li key={link.name} className="w-full leading-8 list-none focus:outline-none flex flex-col text-center py-4 tracking-normal hover:opacity-50 opacity-100 transition-all duration-200 ease-in-out">
                      <Link
                        activeClass="active"
                        to={link.name}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="h-full w-full py-2 text-4xl text-white"
                        onClick={() => {setOpenMobileNav(!openMobileNav)}}
                        >
                        {link.name}
                        </Link>
                    </li>
                ))
               }
            </ul>
        </nav>
    </div>
  )
}

export default MenuOverlay