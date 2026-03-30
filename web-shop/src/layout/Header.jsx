import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
function Header() {
  return (
    <header className="w-full bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-300 mx-auto flex flex-col sm:flex-row items-center justify-between p-5 ">
        {/* logo */}
        <a href="#" className="flex items-center justify-center w-auto">
          <FaShoppingBag size={32} className="text-white bg-blue-500 p-1" />
          <span className="text-3xl text-blue-500  ">shoppe</span>
        </a>
        {/* Search */}
        <div className="flex items-center w-full max-w-150">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full h-10 pl-5 bg-gray-200 rounded-md"
          />
          <div className="p-3 bg-blue-100 rounded-md cursor-pointer">
            <FaMagnifyingGlass />
          </div>
        </div>
        {/* login */}
        <div className="flex gap-3 items-center">
          <a
            href="#login"
            className=" text-black"
          >
            <IoPerson size={25} />
          </a>
          <a
            href="#cart"
            className=" text-black">
            <FaShoppingCart size={25} />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
