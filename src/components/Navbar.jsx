import { useState } from "react"


const Navbar = () => { 


  const [ OpenMobileNav, setOpenMobileNav] = useState(false)

  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Projects', path: '/'},
    {name: 'Contact', path: '/'},
  ]

  return (
    <nav className="flex justify-between min-w-full">
        <div className="flex ">
            <h1 className="md:text-5xl text-4xl p-4" style={{fontFamily: 'Staatliches'}}>Jashawn Rogers</h1>
        </div>
        <button onClick={() => setOpenMobileNav(!OpenMobileNav)} className="md:hidden absolute right-6 p-3 z-[1000] text-5xl cursor-pointer">
          <ion-icon name={OpenMobileNav ? 'close-outline' : 'menu-outline'}></ion-icon>
        </button>
        <ul className={ `${OpenMobileNav ? '': 'hidden'} md:flex md:items-center md:p-3 md:text-2xl md:static md:w-auto pt-20 pl-7 w-full h-auto absolute md:z-auto text-center transition-all duration-500 ease-in`} style={{fontFamily: 'Staatliches'}}>
          {
            navLinks.map((link) => (
              <li key={link.name} className="md:p-3 cursor-pointer md:flex md:items-center py-5 text-2xl hover:text-gray-800">
                <a href={link.path}>{link.name}</a>
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