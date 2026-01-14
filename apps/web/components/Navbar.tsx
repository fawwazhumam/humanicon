import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
        <Link href="/">
          <Image
            width={165}
            height={36}
            src="./assets/logos/H-icon.svg"
            alt="logo"
          />
        </Link>
        <ul className="flex items-center gap-[50px] w-fit">
          <li>
            <Link href="/">Humanicon</Link>
          </li>
          <li>
            <Link href="/">Docks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
