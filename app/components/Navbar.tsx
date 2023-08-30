import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 tracking-widest">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search></Search>
    </nav>
  );
};
export default Navbar;
