import { useTheme } from "@/shared/hooks/useTheme";
import Link from "next/link";

const Header = () => {
  const { handleTheme } = useTheme();

  return (
    <header className="w-auto dark:border-zinc-100 border-b py-5 px-20 flex justify-between items-center">
      <Link href={"/"} className="text-3xl">
        Guerra blog
      </Link>
      <nav className="text-xl flex justify-betwee w-max gap-5">
        {/* <Link href={"/"} className="hover:text-blue-200">
    Portifolio
  </Link> */}
        <Link href={"/blog"} className="hover:text-blue-200">
          Blog
        </Link>
        <button onClick={() => handleTheme()} className="hover:text-blue-200">
          Switch
        </button>
      </nav>
    </header>
  );
};

export default Header;
