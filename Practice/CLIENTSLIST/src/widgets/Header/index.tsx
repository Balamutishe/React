import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="py-6 px-4 bg-[#FFFFFF]">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  );
};
