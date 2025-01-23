import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4 border-b-2">
      <div className="navbar flex bg-base-100 px-2">
        <div className="flex-1">
          <Link href="/">
            <Image src="/next.svg" alt="image" width={100} height={150} />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex gap-6">
            <Link href={"/"} className={"font-semibold hover:underline"}>
              Home
            </Link>
            <Link href={"/blogs"} className={"font-semibold hover:underline"}>
              Blogs
            </Link>
          </ul>
        </div>
        
        {/* <div>
        {isAuthenticated ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        ) : (
          <button onClick={login} className="bg-green-500 px-3 py-1 rounded">Login</button>
        )}
      </div> */}
        
      </div>
    </nav>
  );
};

export default Navbar;