import { FiSun } from 'react-icons/fi'

const navbar = () => {
  return (
    <nav className="border-b flex justify-between">
        <div className="flex p-3">
            <h1 className="">Jashawn Rogers</h1>
        </div>
        
        <ul className="flex">
          <li className="p-3 cursor-pointer  flex items-center hover:text-gray-800">
              <a href="#">Home</a>
          </li>
          <li className="p-3 cursor-pointer flex items-center hover:text-gray-800">
              <a href="#">Projects</a>
          </li>
          <li className="p-3 cursor-pointer  flex items-center hover:text-gray-800">
              <a href="#">Contact</a>
          </li>
          <li className="p-3 cursor-pointer  flex items-center hover:text-gray-800">
              <button><FiSun/></button>
          </li>

        </ul>
        
    </nav>
  )
}

export default navbar