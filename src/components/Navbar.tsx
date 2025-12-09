import { useState } from "react";
import {
  Navbar as RootNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarAction,
  MobileMenuToggle,
  MobileMenu,
} from "./ui/resizable-navbar";
import { Code2, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Tracks", link: "#tracks" },
    { name: "Schedule", link: "#schedule" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
  ];

  return (
    <>
      <RootNavbar>
        <NavbarBrand>
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-500/20">
            <Code2 className="w-5 h-5 text-indigo-400" />
          </div>
          <span className="font-display font-bold text-lg tracking-wide text-white hidden sm:block">
            INNOVATEX<span className="text-indigo-500">.</span>
          </span>
        </NavbarBrand>

        <NavbarContent>
          {navItems.map((item) => (
            <NavbarItem
              key={item.name}
              href={item.link}
              active={activeTab === item.name}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </NavbarItem>
          ))}
        </NavbarContent>

        <div className="flex items-center gap-2">
          <NavbarAction className="bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/50 shadow-lg shadow-indigo-500/20">
            <span className="flex items-center gap-2">
              Register <ArrowRight className="w-4 h-4" />
            </span>
          </NavbarAction>
          <MobileMenuToggle />
        </div>
      </RootNavbar>

      <MobileMenu items={navItems}>
        <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95 transition-all">
          From Idea to Launch <ArrowRight className="w-5 h-5" />
        </button>
      </MobileMenu>
    </>
  );
};

export default Navbar;
