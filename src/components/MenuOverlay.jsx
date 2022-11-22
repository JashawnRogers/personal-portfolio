

const MenuOverlay = ({openMobileNav, setOpenMobileNav, navLinks}) => {
  return (
    <div>
        <nav className={`fixed w-full flex flex-col items-center px-10 z-10 h-screen pt-24 bg-black transform delay-100 transition-all duration-300 ${
        openMobileNav ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
        style={{fontFamily: 'Staatliches'}}
      >
            <ul className="h-screen">
               {
                navLinks.map((link) => (
                    <li key={link.name} className="w-full leading-8 list-none focus:outline-none flex flex-col text-center py-4 tracking-normal hover:opacity-50 opacity-100 transition-all duration-200 ease-in-out">
                        <a className="h-full w-full py-2 text-4xl text-white" href={link.path} onClick={() => {setOpenMobileNav(!openMobileNav)}}>
                          {link.name}
                        </a>
                    </li>
                ))
               }
                <li className="p-3 cursor-pointer flex justify-center  hover:text-gray-800 ">
                    <button className="text-3xl"><ion-icon name="sunny-outline"></ion-icon></button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default MenuOverlay