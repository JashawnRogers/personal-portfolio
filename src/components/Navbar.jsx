
const Navbar = ({navLinks, openMobileNav, setOpenMobileNav}) => { 

  return (
    <nav className="flex justify-between min-w-full  z-10">
        <div className="">
            <h1 className="md:text-5xl md:pl-6 text-4xl p-4" style={{fontFamily: 'Staatliches, cursive'}}>Jashawn Rogers</h1>
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

              <li key={link.name} className=" z-10 md:p-3 cursor-pointer md:flex md:items-center py-5 text-2xl hover:text-gray-800">
                <a className="after:absolute after:z-[-1] after:mix-blend-multiply" href={link.path}>{link.name}</a>
              </li>
            ))
          }
          <li className="p-3 cursor-pointer flex justify-center  hover:text-gray-800 ">
              <button className="text-3xl"><ion-icon name="sunny-outline"></ion-icon></button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar