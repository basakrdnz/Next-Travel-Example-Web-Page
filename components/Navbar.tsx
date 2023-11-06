import { NAV_LİNKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" relative justify-between container p-5 w-screen m-auto flex">
      <Link href="/" className="my-auto">
        <Image src="/hilink-logo.svg" alt="logo" width={80} height={29}></Image>
      </Link>
      <ul className="md:flex m-auto gap-16 hidden ">
        {NAV_LİNKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-50 hover:font-bold cursor-pointer transition-all "
          >
            {link.label}
          </Link>
        ))}
        
      </ul>
      <div className="md:flex hidden">
          <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"></Button>
      </div>
      <Image src="menu.svg" alt="menu" width={32} height={32} className="md:hidden flex"></Image>
    </nav>
  );
};

export default Navbar;
