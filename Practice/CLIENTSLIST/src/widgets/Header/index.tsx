import { ClientSearch } from "@features/clients";
import Logo from "./logo.svg?react";

export const Header = () => {
  return (
    <header className="flex items-center py-6 px-10 bg-[#FFFFFF]">
      <div className="mr-20">
        <Logo />
      </div>
      <nav className="w-1/2">
        <ClientSearch />
      </nav>
    </header>
  );
};
