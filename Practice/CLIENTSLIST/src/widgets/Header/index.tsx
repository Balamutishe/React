import Logo from "./logo.svg?react";

export const Header = () => {
  return (
    <header className="flex items-center py-6 px-4 bg-[#FFFFFF]">
      <div className="mr-20">
        <Logo />
      </div>
      <nav className="w-1/2">
        <input
          type="text"
          name="search"
          placeholder="Введите запрос"
          className="w-full px-4 py-3 outline-2 outline-offset-2 outline-gray-500/50 rounded cursor-pointer hover:outline-blue-700/70"
        />
      </nav>
    </header>
  );
};
