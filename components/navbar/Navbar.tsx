import { Suspense } from "react";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <Suspense fallback={<div>Loading...</div>}>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
