import Image from "next/image";
import NavLink from "@/components/NavLink";

const Navbar = () => {
  return (
    <div className="mt-8 mx-5">
      <nav className="flex items-center justify-between sm:px-5">
        <Image src="/Asset5.svg" alt="logomark" width={70} height={50} />
        <div className="flex pl-6 gap-2">
          <p>
            <NavLink href="/">Home</NavLink>
          </p>
          <p>
            <NavLink href="/courses">Courses</NavLink>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
