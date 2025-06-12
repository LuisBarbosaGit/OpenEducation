interface SidebarProps {
  show: boolean;
}

export const Sidebar = ({ show }: SidebarProps) => {
  return (
    <div
      className={`h-full transition-all duration-800 ease-in-out p-5 overflow-hidden ${
        show ? "w-60" : "w-0"
      }`}
    >
      <div className="h-40"></div>
      <ul className={`flex flex-col gap-2 p-4 w-full`}>
        <li className="p-2 hover:bg-gray-200 rounded transition-colors overflow-hidden font-Roboto">
          <a
            href="#"
            className={`block transition-all duration-200 ease-in-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            Matemática
          </a>
        </li>
        <li className="p-2 hover:bg-gray-200 rounded transition-colors overflow-hidden font-Roboto">
          <a
            href="#"
            className={`block transition-all duration-200 ease-in-out delay-75 ${
              show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            Português
          </a>
        </li>
        <li className="p-2 hover:bg-gray-200 rounded transition-colors overflow-hidden font-Roboto">
          <a
            href="#"
            className={`block transition-all duration-200 ease-in-out delay-150 ${
              show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            História
          </a>
        </li>
        <li className="p-2 hover:bg-gray-200 rounded transition-colors overflow-hidden font-Roboto">
          <a
            href="#"
            className={`block transition-all duration-200 ease-in-out delay-225 ${
              show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            Geografia
          </a>
        </li>
      </ul>
    </div>
  );
};
