import CoffeeLogo from "@/app/_components/CoffeeLogo";

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <CoffeeLogo />
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li className="text-sm text-gray-500 font-medium uppercase py-2">
            Menu
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              Extras
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              View page
            </a>
          </li>
          <li className="text-sm text-gray-500 font-medium uppercase py-2 mt-4">
            Account settings
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
