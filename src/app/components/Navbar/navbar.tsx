import { useSidebar } from "@/app/contexts/sidebar.context";
import { PanelLeft, PanelRight } from "lucide-react";

export const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="flex justify-between h-20 items-center p-9">
      <div className="flex items-baseline gap-5">
        <h1 className="text-2xl font-bold ">OpenEducational</h1>
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
        >
          {isSidebarOpen ? <PanelLeft size={16} /> : <PanelRight size={16} />}
        </button>
      </div>
    </nav>
  );
};
